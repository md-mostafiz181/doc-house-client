import { IoLocationOutline } from "react-icons/io5";
import Container from "../Container/Container";
import "../Location/Location.css"
import { MdOutlineWatchLater } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";


const Location = () => {
    return (
        <div id="location-part">
            <Container>
                <div className="location-main grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">


                    <div className="item1 h-[200px] bg-[#07332f]  rounded-md flex" > 
                       <div className="left w-1/3   h-full">
                         <div className="flex items-center justify-center mt-14 ms-20">
                         < MdOutlineWatchLater className="w-9 h-9 text-white" />
                         </div>

                       </div>
                       <div className="right w-2/3 h-full">
                       <div className="mt-14 ms-2">
                       <h1 className="text-bold text-xl text-white">Opening Hours</h1>
                       <p className="text-normal text-white text-1xl mt-2">Open 9.00 am to 5.00pm <br /> Everyday</p>
                       </div>
                        </div>
                    </div>


                    <div className="item2 h-[200px] bg-[#F7A582]  rounded-md flex" >
                        
                       <div className="left w-1/3   h-full">
                         <div className="flex items-center justify-center mt-14 ms-20">
                         < IoLocationOutline  className="w-9 h-9 text-white" />
                         </div>

                       </div>
                       <div className="right w-2/3 h-full">
                       <div className="mt-14 ms-2">
                       <h1 className="text-bold text-xl text-white">Our Locations</h1>
                       <p className="text-normal text-white text-1xl mt-2">Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</p>
                       </div>
                        </div>
                    </div>


                    <div className="item3 h-[200px] bg-[#07332f]  rounded-md flex" >
                        
                       <div className="left w-1/3   h-full">
                         <div className="flex items-center justify-center mt-14 ms-20">
                         < SlCallOut  className="w-9 h-9 text-white" />
                         </div>

                       </div>
                       <div className="right w-2/3 h-full">
                       <div className="mt-14 ms-2">
                       <h1 className="text-bold text-xl text-white">Contact Us</h1>
                       <p className="text-normal text-white text-1xl mt-2">+88 01750 00 00 00 <br /> 
                       +88 01750 00 00 00</p>
                       </div>
                        </div>
                    </div>

                        
                </div>
            </Container>
        </div>
    );
};

export default Location;