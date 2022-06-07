import React from 'react'
import logo from './porsche.avif'

const pages = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <p href="">
       <button>Click</button> in my button <code>HERE</code> and go to vehicles
      </p>
      
      <a
        className="App-link"
        href="https://629e0cb9c6ef9335c0ad6580.mockapi.io/auto/vehiclesResilia"
        target="_blank"
        rel="noopener noreferrer">
          
        vehicles
      </a>
     
      <summary>
        <span>Aqui tem os melhores carros!</span>
        <pre><code>
        
        </code>

        </pre>
      </summary>
    </header>
  </div>
  )
}

export default pages