import { legacy_createStore as createStore } from 'redux';
import TodoTaskReducer from './reducer';

export const store = createStore(TodoTaskReducer);