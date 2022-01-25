// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '@redux/sagas';
import {rootReducer} from '@redux/reducers';

const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSagas);
// Exports
export {store};
