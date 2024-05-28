import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";


const Upcoming = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };
  return (
    <div className="md:pl-[70px] relative bg-zinc-800 ">
      <div className=" h-screen bg-zinc-800  flex flex-col justify-center items-center md:items-start lg:w-full px-2.5 md:px-0">
        <h3 className="text-white text-3xl xl:text-[57px] font-semibold font-poppins whitespace-nowrap">
          The process is on going...
        </h3>
        <h3 className="text-[#F3F3F3] text-2xl  xl:text-[32px] font-[50px] font-poppins xl:w-[651px] mt-10 text-center mb-10 md:text-start">
         Soon it will be available.
        </h3>
        <Button  text="Go Back" onClick={goBack}/>
      </div>
    </div>
  );
};
export default Upcoming;