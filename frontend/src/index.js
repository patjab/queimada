import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';

import { BrowserRouter, Route } from 'react-router-dom'

import './static/dist/semantic-ui/semantic.min.css'
import './static/stylesheets/default.css'
import './static/stylesheets/pandoc-code-highlight.css'

import App from './App';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Route path={`/user/:id`} component={App}/>
  </BrowserRouter>
  ,
  document.getElementById('root'));
registerServiceWorker();
