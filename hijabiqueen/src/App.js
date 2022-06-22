import './App.css';
// import ResponsiveGrid from './components/billBoards.js/billBoards';
// import { BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
// import BillBoards from './components/billBoards.js/billBoards';
// import Footer from './components/Footer/footer.js'
// import Home from './components/Home/home';
// import TimeLine from './components/ReserveQueen/reserveQueen';
// import Team from './components/BillBoards/billBoards';
// import NavBar from '/home/tariq/hijabiqueen/src/components/NavBar/navBar.js';
import RouteConfig  from './components/Routes/routes';


function App() {
  return (
    <div>
      <RouteConfig />
        
    </div>

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

export default App;
