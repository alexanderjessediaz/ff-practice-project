import {createWrapper, Context} from 'next-redux-wrapper';
import {AppPersistedStoreType, AppState} from './types';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {ROOT_ACTION_TYPE} from './actions';
import {user} from './user/reducer';
import thunk from 'redux-thunk';
const persistStorageKey = 'amplyAdminNext';
import {persistStore, persistReducer} from 'redux-persist';

const combinedReducer = combineReducers<AppState>({
  user,
});

const rootReducer = (state, action) => {
  if (action.type === ROOT_ACTION_TYPE.USER_LOGOUT) {
    // remove from Local Storage the Persist Key...
    localStorage.clear();
    state = undefined;
  }

  return combinedReducer(state, action);
};

const bindMiddleware = () => {
  if (process.env.NODE_ENV !== 'production') {
    //this connects to Redux DevTools Chrome Extension that would allow for viewing of the ReduxStore in the Browser...
    const {composeWithDevTools} = require('redux-devtools-extension');
    const composeEnhancers = composeWithDevTools({
      trace: true,
      traceLimit: 25,
    });
    return composeEnhancers(applyMiddleware(thunk));
  }

  return applyMiddleware(thunk);
};

const makeStore = (context: Context): AppPersistedStoreType => {
  const isClient = typeof window !== 'undefined';
  if (!isClient) {
    //If it's on server side, create a store
    return createStore(rootReducer, bindMiddleware());
  } else {
    //If it's on client side, create a store which will persist
    const storage = require('redux-persist/lib/storage').default;
    
    const persistConfig = {
      key: persistStorageKey,
      blacklist: ['notifications'], // reducers added here will not be persisted
      storage, // if needed, use a safer storage
    };
    
    const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer
    
    const store: AppPersistedStoreType = createStore(persistedReducer, bindMiddleware()); // Creating the store again
    
    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
    
    return store;
  }
};
export const wrapper = createWrapper(makeStore);