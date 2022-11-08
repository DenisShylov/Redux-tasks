import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { addUser, removeUser } from './user.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 4, name: 'DDDD' }));
store.dispatch(setLanguage('ru'));
store.dispatch(removeUser());
store.dispatch(addProduct({ id: '76', name: 'milk' }));
store.dispatch(removeProduct(76));
