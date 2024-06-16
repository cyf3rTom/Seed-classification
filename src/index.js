import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AuthProvider } from "./context/auth";


ReactDOM.render(
  <AuthProvider>
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>
  </AuthProvider>,
  document.getElementById('root')
);