import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware, StateObservable } from 'redux-observable';
import { rootReducer, RootState } from './rootReducer';
import { rootEpic } from './rootEpic';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';

const middleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();

 const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleWare) =>
      getDefaultMiddleWare({
        immutableCheck: true,
        thunk: false,
        //serializableCheck
      }).concat([middleware]),
  });
  middleware.run(rootEpic);
  return store;
}

export const store = createStore();

export interface EpicDependencies {
  ajaxGet: typeof ajax.get;
}
export type Epic = (
  action$: Observable<AnyAction>,
  state$: StateObservable<RootState>,
) => Observable<AnyAction>;