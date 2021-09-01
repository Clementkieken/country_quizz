import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// on importe notre reducer (l'employé du store)
import reducer from '../reducers';

// on crée le store
const store = createStore(reducer, devToolsEnhancer());

export default store;
