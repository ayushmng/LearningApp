import {combineReducers} from 'redux';
// import orderListReducer from '@redux/OrderList/OrderListReducer';

export const rootReducer = combineReducers({
  // orderList: orderListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
