import React from 'react'
// import {Link} from 'react-router-dom'
import {HashLink as Link} from'react-router-hash-link';
import './navBar.css';
export default function NavBar(){
    return (
        
            
            <nav className='nav'>
                <img className='logo' src='	https://hijabiqueens.io/wp-content/uploads/2022/02/HQ-3D-Version-3-2048x2048.png'/>
                {/* <ul className='nav-list'>
                  <li> <a href='https://www.google.com'>ROADMAP</a></li>
                  <li><a href='services'>TEAM</a></li>
                  <li><a href='team'>PRESS</a> </li>
                  <li><a href='#carrer'>HQ COIN</a></li>
                </ul> */}
                <div className='nav-list'>
                <Link className='link' smooth to='#section'>HOME</Link>
                <Link className='link' smooth to='#reserveQueen'>QUEEN</Link>
                {/* <Link className='link' smooth to="/team"> TEAM  </Link> */}
                <Link className='link' smooth to='#billboards'>BOARDS</Link>
                </div>
                <div  className='wallet-button'>
                <button >
                    CONNECT WALLET
                </button>                
                </div>
            </nav>

         

            
        
    )
}

// <div className='navbar'>
//             <img className='logo' src='	https://hijabiqueens.io/wp-content/uploads/2022/02/HQ-3D-Version-3-2048x2048.png'/>
//             <nav className='nav'>
//                 <ul className='nav-list'>
//                   <li> 
//                     <a href='#home'>ROADMAP</a>
//                     </li>
//                   <li>
//                     <a href='#services'>TEAM</a>
//                 </li>
//                   <li>
//                     <a href='#carrer'>PRESS</a> 
//                   </li>
//                   <li>
//                     <a href='#carrer'>HQ COIN</a>
//                   </li>
//                 </ul>
                
//             </nav>
//             <button className='wallet-button'>
//                     CONNECT WALLET
//                 </button>
//          </div>
         

            
        
//     )
// }
