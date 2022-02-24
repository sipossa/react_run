import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Main from './Main';
import Section01 from './Section01';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
        <Header />
        <Main />
        <Section01 />
        <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
