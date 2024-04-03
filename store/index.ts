import { combineReducers, createStore } from 'redux';
import formReducer from './formCRUD/formReducer';

export const store = createStore(combineReducers({
    formCRUD: formReducer,
}));

export type RootState = ReturnType<typeof store.getState>;