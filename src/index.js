import { createStore } from 'redux';
import todoApp from './reducers/todoApp';
import { addToDo, toggleTodo, setVisibilityFilter, VisibilityFilters } from "./actions";

const store = createStore(todoApp)

console.log('123');
  // Log the initial state
  console.log(store.getState());
  const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )
  store.dispatch(addToDo('Learn about actions'))
  store.dispatch(addToDo('Learn about reducers'))
  store.dispatch(addToDo('Learn about store'))
  store.dispatch(toggleTodo(0))
  store.dispatch(toggleTodo(1))
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
  // Stop listening to state updates
  unsubscribe()





  // import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();