
import Navbar from './UIComponents/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';


/* Router paths */
import CourseCategory from './Pages/CourseCategory';
import ProductCourse from './Pages/ProductCourse';
import Home from './Pages/Home';
import TodayDeals from './Pages/TodayDeals/TodayDeals';
import TodayDealsProductList from './Pages/TodayDeals/TodayDealsProductList';
import TodayDealsCheckout from './Pages/TodayDeals/Checkout';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

import Footer from './UIComponents/Footer';
/* different banner for different pages */
import banner_IT from './Images/Icons/banner_IT.png'
import banner_Design from './Images/Icons/banner_Design.png'
import banner_Business from './Images/Icons/banner_Business.png'
import banner_TodayDeals from './Images/Icons/banner_TodayDeals.png'



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        {/*comes to the selected path then Learnign Home Page is rendered */}
        <Route path='/' element={<Home/>}/>
        { /* pass the banner to props */ }
        <Route path='/todayDeals' element={<TodayDeals/>}/>
        <Route path=':productCourseId' element={<ProductCourse/>}/>
        <Route path='/itSoftwareCourses' element={<CourseCategory banner= {banner_IT} category="itSoftwareCourses" />}/>
        <Route path='/designCourses' element={<CourseCategory banner= {banner_Design} category="designCourses"/>}/>
        <Route path='/businessCourse' element={<CourseCategory banner= {banner_Business} category="businessCourse"/>}/>
        
          <Route path="/productCourse" element={<ProductCourse/>}>
            <Route path=':productCourseId' element={<ProductCourse/>}/>
            </Route>

          <Route path="/TodayDeals/ProductList" element={<TodayDealsProductList/>}>
            <Route path=':productCourseId' element={<TodayDealsProductList/>}/>
            </Route>

          <Route path="/TodayDealsCheckout" element={<TodayDealsCheckout/>}>
            <Route path=':productCourseId' element={<TodayDealsCheckout/>}/>
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
