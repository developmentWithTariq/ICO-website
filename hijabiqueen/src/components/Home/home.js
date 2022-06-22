// import discordIcon from '../../cards/discord-icon.svg'
// import React form 'react'
import 'animate.css'
import {Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./home.css"
import useWebAnimations , {bounce , fadeInLeft} from "@wellyshen/use-web-animations";






// import useWebAnimations , {bounrrd} from "@wellyshen/use-web-animations";
 
export default function Home() {
    const { ref, playState , getAnimation} = useWebAnimations({...bounce });
    // const { ref2, playState2 , getAnimation2} = useWebAnimations({...fadeInLeft});
    
    return (
        <section>
            <div className="main-box">
                <div className="first-sec">

                    <h1 className='animate__animated animate__zoomIn'>
                        HIJABI QUEENS
                    </h1>
                    <p className='animate__animated animate__fadeInLeft'>
                        A Limited NFT collction of 5000 Hijabi Queens
                        & 5000 Bearded Kings. Owning either one grants
                        you VIP access to the HQ club. The club is being build by passionate women and serves as a network
                        for Muzzy entrepeneours and creator to thrive.
                        
                    </p>

                    <div className="first-sec-img ">
                        <img className='animate__animated animate__fadeInLeftBig animate__delay-800ms'  src="https://walkn.app/wp-content/uploads/2022/05/play-store-logo-33874-e1651801404230.png" />
                        <img className='animate__animated animate__fadeInLeftBig animate__delay-0.5s'  src="https://walkn.app/wp-content/uploads/2022/05/22-227594_amazon-png.png" />
            
                    </div>
                
                    <div className='social-logos-home'>
                        <TwitterIcon  sx={{ color: "white", fontSize: 40, marginLeft: "0px" }} />
                        <InstagramIcon sx={{ color: "white", fontSize: 40, marginLeft: "35px" }} />
                        {/* <img src='https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).svg' sx= {{ color: "white" , fontSize : 40  , marginLeft : "15px"}}/> */} 
                        <InstagramIcon sx={{ color: "white", fontSize: 40, marginLeft: "35px" }} /> 
                         <InstagramIcon sx={{ color: "white", fontSize: 40, marginLeft: "35px" }} /> 
                    </div>  
                </div>
                <div className="second-sec animate__animated animate__fadeInRightBig">
                    <img src="https://hijabiqueens.io/wp-content/uploads/2022/02/Zoning-Out.png" />

                </div>




            </div>
        </section>
    )
}