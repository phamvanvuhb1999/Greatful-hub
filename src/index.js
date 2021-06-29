import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './connects/App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import store from './redux/store';

import {PersistGate, persistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/store';

ReactDOM.render(
  <Provider store={store} >  
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
