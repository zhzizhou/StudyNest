import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Enrollment from './pages/Students/Enrollment';
import RegisterStudent from "./pages/Students/RegisterStudent";
import { UnenrollTeacher } from './pages/Admin/UnenrollTeacher';
import StudentHome from './pages/Students/StudentHome';
import StudentSubject from './pages/Students/StudentSubject';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Student/Enrollment' element={<Enrollment/>}/>
        <Route path='/Admin/UnenrollTeacher' element={<UnenrollTeacher />} />
        
        <Route path='/login/RegisterStudent' element={<RegisterStudent/>}/>
        <Route path="/Student/Home" element={<StudentHome/>}/>
        <Route path="/Student/Subjects" element={<StudentSubject/>}/>
      
      </Routes>

    </>
  );
}

export default App;
