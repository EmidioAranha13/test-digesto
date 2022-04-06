import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import App from './App';
import store from './redux/store';

// ReactDOM.render(
//   <Provider store = {store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   </Provider>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
);