
// import ResponsiveGrid from './components/billBoards.js/billBoards';
import { BrowserRouter  , Routes ,Route} from 'react-router-dom';
// import BillBoards from './components/billBoards.js/billBoards';
import Footer from '.././Footer/footer.js'
import Home from '.././Home/home.js'
import ReserveQueen from '../ReserveQueen/reserveQueen';
import BillBoards from '../BillBoards/billBoards';
import NavBar from '../NavBar/navBar.js';
import Sections from '../Sections/Sections.js';


function RouteConfig() {
  return (
    <BrowserRouter>
        {/* <NavBar /> */}
      <Routes>
        <Route path="/" element= {<Sections />} exact />
        {/* <Route path="/team" element = {<Team />} /> 
        <Route path='/billboards' element={<TimeLine />}/> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    // <div className="App">
    //   <NavBar/>
    //   <Home/>
    //   <TimeLine/>
    //   {/* <ResponsiveGrid /> */}
    //   <Team />
    //   <Footer />
    // </div>
  );
}

export default RouteConfig;
