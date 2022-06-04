import logo from '../carro.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Click <code>HERE</code> and go to vehicles
        </p>
        
        <a
          className="App-link"
          href="https://cidadao2.sinesp.gov.br/api/vehicles/${placa}"
          target="_blank"
          rel="noopener noreferrer">
          vehicles
        </a>
        
      </header>
    </div>
  );
}

export default App;
