import { decrement, increment, reset } from './counter.actions';
import { addUsers, deleteUsers, updateUsers } from './users.actions';
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

store.dispatch(addUsers({ id: 1, name: 'Tom' }));
store.dispatch(addUsers({ id: 2, name: 'T' }));
store.dispatch(updateUsers(2, { name: 'Timi', age: 22 }));
// store.dispatch(deleteUsers(1));
