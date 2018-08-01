import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';



import './static/dist/semantic-ui/semantic.min.css'
import './static/stylesheets/default.css'
import './static/stylesheets/pandoc-code-highlight.css'

import App from './App';
import Preapp from './Preapp';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Preapp/>
  ,
  document.getElementById('root'));
registerServiceWorker();

// http://localhost:[PORT]/api/v1/users
