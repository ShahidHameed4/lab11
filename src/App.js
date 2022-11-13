import './App.css';

function App() {
  const num=[5,6,7];
  return (
    <div className="App">
      <header data-testid = "testHeader" className="App-header">
        Hello World
      </header>


      <ul data-testid = "list"> 
      {num.map((number) => (<li>{number}</li>))}   
      </ul>

    </div>
  );
}

export default App;
