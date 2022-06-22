import './footer.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
export default function Footer() {
    return(
        <div className="footer">
          
            <div className='quick-links'>
                <h4>Quick Links</h4>
                <ul className='quick-list'>
                    <li className='quick-list-li'> <a href='#home'>Home</a></li>
                    <li className='quick-list-li' ><a href='#services'>Team</a></li>
                    <li id='third-li'><a href='#carrer'>Whitepaper</a> </li>

                </ul>

            </div>
            <div className='social-links'>
                <img className='logo' src='https://hijabiqueens.io/wp-content/uploads/2022/02/HQ-3D-Version-3-2048x2048.png'/>
                <div className='social-logos'>
                   
                        <a href='https://twitter.com/NiftyMuslims'>
                            <TwitterIcon sx= {{ color: "white" , fontSize : 40  , marginLeft : "110px"}}/>
                        </a>
               
                <a href='https://discord.com/invite/VspbKHPrte'><InstagramIcon sx= {{ color: "white" , fontSize : 40  ,marginLeft : "15px"}}/></a>
                
                <a href='https://t.me/+trQXbanvJD1jMTdh'><TelegramIcon sx= {{ color: "white" , fontSize : 40  , marginLeft : "15px"}}/></a>
                                  
                <a href='https://discord.com/invite/VspbKHPrte'><InstagramIcon sx= {{ color: "white" , fontSize : 40 , marginLeft : "15px"}}/></a>
               
                </div>
                <p className='copyright-license'>
                2022 Muzzy Entertainment LLC, All Rights Reserved
                </p>
                
                {/* <img className='discord-icon' src={discordIcon} alt="discord icon" style={{ color : "white" , fontSize : 40}} /> */}

            </div>
            <div className='contact'>
                <h4>Contact</h4>
                <p>info@hijabiqueens.com</p>

            </div>


        </div>


    )
}