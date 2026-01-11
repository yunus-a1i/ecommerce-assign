'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { useEffect } from 'react';
import { loadCartFromStorage } from './slices/cartSlice';

function CartLoader({ children }) {
  useEffect(() => {
    store.dispatch(loadCartFromStorage());
  }, []);

  return children;
}

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <CartLoader>{children}</CartLoader>
    </Provider>
  );
}