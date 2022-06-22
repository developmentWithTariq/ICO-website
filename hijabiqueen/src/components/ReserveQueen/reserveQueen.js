import "./reserveQueen.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import React from "react"
export default function ReserveQueen() {
    
    return (
        <section>
            <div className="main-queen" id="reserveQueen">
                <div className="queen-first-sec " >
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                <img src="	https://hijabiqueens.io/wp-content/uploads/2022/02/Hijabi-Queens-web-1.png" />
                </AnimationOnScroll>  
                    
                </div>
                <div className="queen-second-sec">
                <AnimationOnScroll animateIn="animate__fadeInRight">
                
                
                <h1>
                    Ready to dive in?
                        
                   
                        
                </h1>
                    {/* <br/> */}
                <h2>
                   GET YOUR QUEEN TODAY
                </h2>
                </AnimationOnScroll> 
                <AnimationOnScroll animateIn="animate__zoomIn">
                
                
                    <button>Reserve Your Queens</button>
                </AnimationOnScroll> 
                    
                    
                </div>
                
                
                
                
            </div>
        </section>
    )
}