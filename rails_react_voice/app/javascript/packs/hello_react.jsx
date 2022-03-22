import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App';
// import '../../assets/public/index.html';
import Counter from '../components/Counter';
import Home from '../Home';
// import '../../assets/scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Counter/>,
    document.body.appendChild(document.createElement('div')),
  )
})