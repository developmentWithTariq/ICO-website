import React from 'react';
import Footer from '.././Footer/footer.js'
import Home from '.././Home/home.js'
import ReserveQueen from '../ReserveQueen/reserveQueen';
import BillBoards from '../BillBoards/billBoards';
import NavBar from '../NavBar/navBar.js';
export default function Sections() {
    return (
        <>
            <NavBar />
            <Home />
            <ReserveQueen />
            <BillBoards />
            <Footer />
        </>
    )
}