import React from 'react'
import './App.css'
import {HashRouter, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Detail from './routes/Detail'
import Navigation from './components/Navigation'


export default function App() {
  return ( 
      <HashRouter>
        <header><h2>Movie2020</h2></header>
        <div className='container'>
          <side>             
            <Navigation></Navigation>                                        
          </side>
          <section className="content">
            <Route path='/' exact={true} component={Home} />
            <Route path='/about' component={About} /> 
            <Route path='/detail' component={Detail} />     
          </section>          
        </div>
        <footer></footer>
      </HashRouter>    
  )
}