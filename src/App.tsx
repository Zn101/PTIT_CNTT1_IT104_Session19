import React, { Component } from  'react'
import ShoppingCart from './components/ShoppingCart'
import ThemeApp from './components/App/ThemeApp.tsx'
import RenderCount from './components/RenderCount'
import Form from './components/Form.tsx'
import RandomQuote from './components/RandomQuote.tsx'
import KeyTracker from './components/KeyTracker.tsx'
import ScrollToSection from './components/ScrollToSection.tsx'
import LoginForm from './components/LoginForm.tsx'
export default class App extends Component {
  render() {
    const boxStyle: React.CSSProperties = {
      border: '2px solid red',
      padding: '16px',
      marginBottom: '16px'
    }

    return (
      <div>
        <div style={boxStyle}><ShoppingCart /></div>
        <div style={boxStyle}><ThemeApp /></div>
        <div style={boxStyle}><RenderCount /></div>
        <div style={boxStyle}><Form /></div>
        <div style={boxStyle}><RandomQuote /></div>
        <div style={boxStyle}><KeyTracker /></div>
        <div style={boxStyle}><ScrollToSection /></div>
        <div style={boxStyle}><LoginForm /></div>
      </div>
    )
  }
}
