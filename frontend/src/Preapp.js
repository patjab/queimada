import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

export default class Preapp extends React.Component {
  render() {
    return <BrowserRouter><App/></BrowserRouter>
  }
}
