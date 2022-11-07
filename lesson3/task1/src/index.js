import { decrement, increment, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';
import store from './store';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'T' }));
store.dispatch(updateUser(2, { name: 'Timi', age: 22 }));
// store.dispatch(deleteUsers(1));
