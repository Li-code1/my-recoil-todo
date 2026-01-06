import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import { todoListState, todoListFilterState, filteredTodoListState } from './store';
import './styles.css';

// Componente Interno para isolar os Hooks do Recoil
function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const filteredList = useRecoilValue(filteredTodoListState);

  const addItem = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { 
        id: crypto.randomUUID(), // Usando UUID para evitar conflitos de ID
        text: inputValue, 
        isComplete: false 
      },
    ]);
    setInputValue('');
  };

  const toggleItemCompletion = (id) => {
    const newList = todoList.map(item => 
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    setTodoList(newList);
  };

  const deleteItem = (id) => {
    const newList = todoList.filter(item => item.id !== id);
    setTodoList(newList);
  };

  return (
    <main className="container">
      <header>
        <h1>Minhas Tarefas</h1>
      </header>

      <form onSubmit={addItem} className="input-group">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="O que precisa ser feito?"
          aria-label="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <nav className="filters" aria-label="Filtros de tarefas">
        {['Ver tudo', 'Pendentes', 'Concluídas'].map((f) => (
          <button 
            key={f}
            className={filter === f ? 'active' : ''} 
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </nav>

      <ul className="todo-list">
        {filteredList.length === 0 && <p style={{textAlign: 'center', color: '#888'}}>Nenhuma tarefa encontrada.</p>}
        {filteredList.map((item) => (
          <li key={item.id} className={`todo-item ${item.isComplete ? 'completed' : ''}`}>
            <span onClick={() => toggleItemCompletion(item.id)}>{item.text}</span>
            <div className="actions">
              <button 
                onClick={() => toggleItemCompletion(item.id)} 
                title="Marcar como concluída"
              >
                {item.isComplete ? '↩️' : '✅'}
              </button>
              <button 
                onClick={() => deleteItem(item.id)} 
                className="delete-btn"
                title="Remover tarefa"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

// O componente App apenas provê o contexto global
export default function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}