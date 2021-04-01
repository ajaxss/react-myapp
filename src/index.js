import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';

const store = createStore(rootReducer)


ReactDOM.render(
  <React.StrictMode>
    {/* 让创建的store作用于APP让他们关联起来 */}
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
