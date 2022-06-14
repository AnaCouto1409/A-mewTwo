import logo from './carro.jpg';
import { Component } from 'react';
import header from './header/header'
import footer from './footer/footer'
import pages from 'react-dom'
import './App.css';
import './pages/pages'
import Lista from './content/Lista';
import cadastro from './pages/cadastro';
import { ReactDOM } from 'react';

function App() {
  return (
    <div className="App">
      <Lista></Lista>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p href="https://mockapi.io/clone/629e0cb9c6ef9335c0ad6581">
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
          <ul className="books_list">
          <li className="book_item first">Esportes</li>
          <li className="book_item second">Lazer</li>
          <li className="book_item third">Trabalhar como Uber</li>
          <li className="book_item fourth">Outras fontes de renda</li>
          <li className="book_item fifth">Uber eats</li>
          <li className="book_item sixth">Trilhas ambientais</li>
        </ul>
          <pre><code>
          
          </code>

          </pre>
        </summary>
      </header>
    </div>
  );
}

export default App;
