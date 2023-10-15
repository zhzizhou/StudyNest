import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Students/Home";
import Enrollment from './pages/Students/Enrollment';
import RegisterStudent from "./pages/Students/RegisterStudent";

import StudentHome from './pages/Students/StudentHome';
import StudentSubject from './pages/Students/StudentSubject';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/StudentEnrollment' element={<Enrollment/>}/>

        
        <Route path='/login/RegisterStudent' element={<RegisterStudent/>}/>
        <Route path="/StudentHome" element={<StudentHome/>}/>
        <Route path="/StudentSubjects" element={<StudentSubject/>}/>
      
      </Routes>
    
    </>
  );
}

export default App;
