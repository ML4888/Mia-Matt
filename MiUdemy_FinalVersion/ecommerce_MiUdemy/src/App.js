
import Navbar from './UIComponents/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';


import Course from './Pages/Course';
import CourseCategory from './Pages/CourseCategory';
import ProductCourse from './Pages/ProductCourse';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

import Footer from './UIComponents/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        {/*comes to the selected path then Learnign Home Page is rendered */}
        <Route path='/' element={<Course/>}/>
        <Route path='/itSoftwareCourses' element={<CourseCategory category="itSoftwareCourses" />}/>
        <Route path='/designCourses' element={<CourseCategory category="designCourses"/>}/>
        <Route path='/businessCourse' element={<CourseCategory category="businessCourse"/>}/>
        <Route path="/productCourse" element={<productCourse/>}>
            <Route path=':productCourseId' element={<productCourse/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
