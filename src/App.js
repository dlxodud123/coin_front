import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main_form from './main/js/main_form';
import Login_form from './login/js/login_form';
import Register_form from './register/js/register_form';
import Exchange_form from './exchange/js/exchange_form';
import Test from './test/test';
import Test2 from './test/test2';

const api = {
  emailCheck: 'https://example.com/api/email-check',
  codeCheck: 'https://example.com/api/code-check',
};

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main_form></Main_form>}></Route>
        <Route path='/login' element={<Login_form></Login_form>}></Route>
        <Route path='/findId'></Route>
        <Route path='/findPwd'></Route>
        <Route path='/register' element={<Register_form></Register_form>}></Route>
        <Route path='/exchange' element={<Exchange_form></Exchange_form>}></Route>
        <Route path='/test' element={<Test></Test>}></Route>
        <Route path='/test2' element={<Test2></Test2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
