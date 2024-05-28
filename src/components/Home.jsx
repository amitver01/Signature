import {Link } from 'react-router-dom';
import React from "react";
import Header from './Header';
import key from "../assets/key.png";

import Footer from './Footer';
function Home() {
    return (
      <>
      <Header />
      <div className="flex  justify-center gap-20 font-bold font-sans bg-zinc-800 m-20">
        <Link to="/sign" className="hover:opacity-80">
      <div className="bg-zinc-600 text-white w-64 h-64 shadow-lg font-mono rounded-lg border-black border-solid p-6 text-center">
      <h2 className="bg-zinc-600 p-14">SIGN HERE </h2>
      <h4 className='bg-zinc-600'>use your TOUCHPAD , MOBILE SCREEN to draw your signatue</h4>
    </div>
    </Link>
    <Link to="/text" className="hover:opacity-80">
    <div className="bg-zinc-600 text-white w-64 h-64 shadow-xl font-mono rounded-lg border-black border-solid p-6 text-center">
    <div className=" w-32 h-32 mx-auto mb-3 rounded-lg flex justify-center items-center">
        <img src={key} alt="Key Image" className="w-25 h-25 bg-zinc-600" />
      </div>
      <h2 className="bg-zinc-600  ">Type your name </h2>
    </div>
    </Link>
    </div>
    <Footer/>
      </>
    )
  }
  
  export default Home;