import './App.css';
import NewTable from "./components/NewTable";
import Popup from './components/Popup';

function App() {
  return (
    <div className="App">
     <div className='B'>
      <button>Add</button>    
     </div>
      <NewTable/>
      <Popup/>
    </div>
  );
}

export default App;
