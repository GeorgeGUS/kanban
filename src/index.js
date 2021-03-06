import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

import App from './components/App';

const component = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(component, document.getElementById('root'));
