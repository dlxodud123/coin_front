import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main_form from './main/js/main_form';
import Login_form from './login/js/login_form';
import Register_form from './register/js/register_form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main_form></Main_form>}></Route>
        <Route path='/login' element={<Login_form></Login_form>}></Route>
        <Route path='/findId'></Route>
        <Route path='/findPwd'></Route>
        <Route path='/register' element={<Register_form></Register_form>}></Route>
      </Routes>
    </div>
  );
}

export default App;
