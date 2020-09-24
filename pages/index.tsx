import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Button from '@material-ui/core/Button'
import store from './store';
import TopPage from './TopPage'


ReactDOM.render(
  <Provider store={store}>
    <TopPage />
  </Provider>,
  document.getElementById("root"),
);