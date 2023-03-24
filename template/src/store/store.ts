import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// IMPORT YOUR REDUCERS HERE
import sessionReducer from './session/sessionSlice';
import mainApi from '../services/mainApi';

// WE COMBINE ALL REDUCERS
const rootReducer = combineReducers({
  session: sessionReducer,
  [mainApi.reducerPath]: mainApi.reducer,
});

// REDUX-PERSISTE CONFIG
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['session'],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

// CREATE STORE. WE DISABLE SERIALIZABLECHECK FOR REDUX-PERSIST ACTIONS ONLY
export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mainApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
