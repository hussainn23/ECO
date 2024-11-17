import React from "react";
import { FaAsterisk } from "react-icons/fa";
import PhoneInput from "./PhoneInput";
import Steps from "./Steps";
import Benefits from "./Benefits";
import Form from "./Form";
import back from '../../public/background.jpg'
const Home = () => {
    return (
        <>
            <div className="mt-[15vh] relative font-poppins w-[100vw] h-[85vh] bg-[#71BB50] flex items-center px-[3rem] text-white">
            <div className="absolute left-0 top-0 z-0">
             <img src={back} />
            </div>
                <div className="w-[70%] z-10">
                    <h1 className="font-bold text-[2.2rem] uppercase ">Check Eligibility</h1>
                    <p>
                        For us to check your eligibility for the free boiler, fill in the
                        form. The whole process is quick with a member of our team
                        contacting you in less than 24 hours. Our eligibility check also
                        involves insulations, radiators and other heating systems offered
                        under the ECO4 scheme. Our friendly team is always up to chat with
                        you and understand your situation, what benefits that will help you
                        qualify for a free boiler, and if there might be other schemes that
                        you qualify under that can help you get a new boiler.
                    </p>
                </div>
                <img src='' />
            </div>
            <div className="w-[100vw] bg-[#FFFFFF] flex justify-center pt-[3rem] pb-[4rem]">
              <Form/>
            </div>
            <div className="w-[100vw] text-center px-4">
                <h1 className="font-bold text-[2rem] uppercase">In Partnership With</h1>
                <div className="flex">
                <div className='width-[100px] h-[200px] bg-white'></div>
                <div className=" w-[80%] flex items-center justify-start animate-marquee space-x-4">
                  
                  <img  className='width-[100px] translate-y-6' src='https://cdn-ilcdpej.nitrocdn.com/cKnijRqVddTVSHgJTKIiQAUjRAMNNctS/assets/images/optimized/rev-af2c312/ecoboilergrants.uk/wp-content/uploads/2024/10/2-logo.jpg'/>
                  <img src='https://cdn-ilcdpej.nitrocdn.com/cKnijRqVddTVSHgJTKIiQAUjRAMNNctS/assets/images/optimized/rev-af2c312/ecoboilergrants.uk/wp-content/uploads/2024/10/3-logo.jpg' />
                  <img src='https://cdn-ilcdpej.nitrocdn.com/cKnijRqVddTVSHgJTKIiQAUjRAMNNctS/assets/images/optimized/rev-af2c312/ecoboilergrants.uk/wp-content/uploads/2024/10/1-logo.jpg' />
                  <img src='https://cdn-ilcdpej.nitrocdn.com/cKnijRqVddTVSHgJTKIiQAUjRAMNNctS/assets/images/optimized/rev-af2c312/ecoboilergrants.uk/wp-content/uploads/2024/10/4-logo.jpg' />
                  <img  className='width-[100px] translate-y-6' src='https://cdn-ilcdpej.nitrocdn.com/cKnijRqVddTVSHgJTKIiQAUjRAMNNctS/assets/images/optimized/rev-af2c312/ecoboilergrants.uk/wp-content/uploads/2024/10/2-logo.jpg'/>
                  <img src='https://cdn-ilcdpej.nitrocdn.com/cKnijRqVddTVSHgJTKIiQAUjRAMNNctS/assets/images/optimized/rev-af2c312/ecoboilergrants.uk/wp-content/uploads/2024/10/3-logo.jpg' />
                  <img src='https://cdn-ilcdpej.nitrocdn.com/cKnijRqVddTVSHgJTKIiQAUjRAMNNctS/assets/images/optimized/rev-af2c312/ecoboilergrants.uk/wp-content/uploads/2024/10/1-logo.jpg' />
                  <img src='https://cdn-ilcdpej.nitrocdn.com/cKnijRqVddTVSHgJTKIiQAUjRAMNNctS/assets/images/optimized/rev-af2c312/ecoboilergrants.uk/wp-content/uploads/2024/10/4-logo.jpg' />
                 
                
              </div>
                <div className='width-[100px] h-[200px] bg-white'></div>
                </div>
              
               
            </div>
            <Benefits />
            <Steps />
        </>
    );
};

export default Home;
