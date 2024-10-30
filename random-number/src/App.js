import logo from './logo.svg';
import './App.css';

function App() {
  const ran = () =>{
    return Math.random();
    
  };
  return (

    

    <div>
<p>Random Number: {ran()}</p>
<button variant="primary" onClick={ran}>Click me</button>

    </div>

  );
}

export default App;
