import logo from './logo.svg';
import './App.css';
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import Calculator from './components/calculator/calculator.component'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}



export default App;
