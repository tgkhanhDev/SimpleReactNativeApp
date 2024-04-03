import { combineReducers, createStore } from 'redux';
import formReducer from './formCRUD/formReducer';

export const store = createStore(combineReducers({
    formCRUD: formReducer,
}));
