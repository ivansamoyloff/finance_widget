import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Container from './components/Container';
import rootReducer from './utils/reducer';

import './styles/index.scss';

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
