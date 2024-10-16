import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import ManageUser from './components/Admin/ManageUser/ManageUser';
import ManageExercise from './components/Admin/ManageExercise/ManageExercise';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../src/components/Pages/Homepage/Homepage'
import Login from '../src/components/Pages/Login/Login'
import Register from '../src/components/Pages/Register/Register'
import Forgotpassword from '../src/components/Pages/ForgotPassword/Forgotpassword'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot-password' element={<Forgotpassword />} />

        <Route path='admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='manage-user' element={<ManageUser />} />
          <Route path='manage-exercise' element={<ManageExercise />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
{/* <Route path='/' element={<App />}></Route> */ }