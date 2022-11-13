import { decrement, increment, reset } from './counter.actions';
import store from './store';

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
