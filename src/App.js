import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='logo192.png'className="App-logo" alt="logo" />
        <p>
         lee changhun 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Menu />
      </header>
    </div>
  );
}

function Menu () {
  return (
    <>
    먼가를 넣고 시프음...
    </>
  )
}

export default App;


