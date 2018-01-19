import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import WebFont from 'webfontloader'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
WebFont.load({
  google: {
    families: ['Ubuntu:300,400,700', 'sans-serif'],
  },
})
