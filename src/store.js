import { atom, selector } from 'recoil';

// Função auxiliar para persistência no localStorage
const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key);
  
  // Se existir algo guardado, carrega o valor no átomo
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  // Sempre que o valor do átomo mudar, atualiza o localStorage
  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

// Átomo para a lista de tarefas (Agora com persistência!)
export const todoListState = atom({
  key: 'todoListState',
  default: [],
  effects: [
    localStorageEffect('todo_list_data'), // Nome da chave no navegador
  ]
});

// Átomo para o filtro atual
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Ver tudo',
});

// Seletor para filtrar a lista
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Concluídas':
        return list.filter((item) => item.isComplete);
      case 'Pendentes':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});