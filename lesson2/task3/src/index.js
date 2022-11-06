import store from './store.js';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 1, name: 'Den' }));
store.dispatch(addUser({ id: 76, name: 'aaa' }));
store.dispatch(deleteUser(76));
console.log(store.getState());
