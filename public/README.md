# 📝 Recoil Todo List

Uma aplicação de gerenciamento de tarefas moderna e responsiva, focada no estudo de **gerenciamento de estado global** utilizando a biblioteca **Recoil**.

---

## 🚀 Funcionalidades

* **Adicionar Tarefas:** Campo de entrada com validação simples.
* **Listagem Dinâmica:** Visualização clara das tarefas pendentes e concluídas.
* **Filtros Inteligentes:** Seleção entre "Ver tudo", "Pendentes" e "Concluídas" através de Seletores do Recoil.
- **Persistência Local:** Utiliza Atom Effects para sincronizar o estado da aplicação com o `localStorage` do navegador, garantindo que os dados não se perdem ao atualizar a página.
* **Gerenciamento de Estado:** Marcação de conclusão e exclusão de itens.
* **Design Responsivo:** Adaptado para dispositivos móveis e desktop.
* **Acessibilidade:** Uso de semântica HTML e atributos ARIA.

## 🧠 Conceitos de Recoil Aplicados

Este projeto foi desenvolvido para demonstrar o domínio sobre:

* **RecoilRoot:** Contexto global da aplicação.
* **Atoms:** Unidades de estado (Lista de tarefas e Filtro atual).
* **Selectors:** Lógica derivada para filtragem em tempo real, mantendo o estado original íntegro.
* **Hooks:** Uso de `useRecoilState` para leitura/escrita e `useRecoilValue` para consumo de dados derivados.

---

## 📂 Estrutura do Projeto

```text
src/
├── store.js       # Definição de Átomos e Seletores (Estado Global)
├── App.jsx        # Componente principal e provedor RecoilRoot
├── main.jsx       # Ponto de entrada da aplicação
└── styles.css     # Estilizações globais e responsividade

```

---

## 🛠️ Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/my-recoil-todo.git

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```



---

## 🌐 Deploy (GitHub Pages)

Este projeto já está configurado para deploy automático no GitHub Pages.

1. **Ajuste o arquivo `vite.config.js`:**
Certifique-se de que o campo `base` contém o nome do seu repositório:
```javascript
base: '/nome-do-seu-repositorio/',

```


2. **Execute o comando de deploy:**
```bash
npm run deploy

```


A aplicação será construída e enviada para a branch `gh-pages`.

---

## 🛠️ Tecnologias Utilizadas

* [React 18](https://reactjs.org/)
* [Recoil](https://recoiljs.org/)
* [Vite](https://vitejs.dev/)
* [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

> Desenvolvido como parte de um estudo prático sobre ecossistemas de gerenciamento de estado no React.

---
