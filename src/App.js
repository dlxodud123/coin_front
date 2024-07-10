import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main_form from './main/js/main_form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main_form></Main_form>}></Route>
      </Routes>
    </div>
  );
}

export default App;
