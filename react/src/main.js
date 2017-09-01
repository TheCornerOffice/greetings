import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App'

$(function() {
  if (document.getElementById('app')) {
    render(
      <App />,
      document.getElementById('app')
    );
  }
});
