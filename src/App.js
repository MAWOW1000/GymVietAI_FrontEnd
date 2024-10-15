import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import ManageUser from './components/Admin/ManageUser/ManageUser';
import ManageExercise from './components/Admin/ManageExercise/ManageExercise';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import HomePage from './components/Home/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' elemet={<Home />}>
          <Route index element={<HomePage />}></Route>
        </Route>
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