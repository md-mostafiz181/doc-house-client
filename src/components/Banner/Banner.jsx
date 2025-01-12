import "../../components/Banner/Banner.css"
import Container from "../Container/Container";
import shadowImg from "../../assets/shadow.png"
import img1 from "../../assets/person1.png"
import img2 from "../../assets/person2.png"
import img3 from "../../assets/person3.png"
import capImg from "../../assets/capsule1.png"
import circleImg from "../../assets/circle.png"

const Banner = () => {
    return (
        <div id="banner-part">
            <Container>
            <div className="banner-main grid lg:grid-cols-2 gap-3 sm:grid-cols-1">
                    <div className="banner-left">
                        <h1 className="lg:text-7xl md:text-6xl sm:text-3xl text-2xl mt-6 text-center sm:text-left font-normal text-white">
                           Your Best Medical Help Center
                        </h1>
                        <p className="lg:text-1xl sm:text-xl mt-5 text-white text-center sm:text-left">Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry’s stardard.</p>

                       <div className="flex justify-center items-center sm:block">
                       <button className="btn-all-service ">All Service</button>
                       </div>
                    </div>
                    <div className="banner-right mt-4">
                        <div className="banner_shadow_img ml-auto w-3/4 ">
                            <img src={shadowImg} alt="" />
                        </div>

                        <div className="banner_person">
                            <div className="person_one ">
                                <img src={img1} alt="" />
                            </div>

                        </div>
                        <div className="banner_person">
                            <div className="person_two hidden sm:block">
                                <img src={img2} alt="" />
                            </div>

                        </div>
                        <div className="banner_person">
                            <div className="person_three">
                                <img src={img3} alt="" />
                            </div>

                        </div>

                        <div className="capsule1">
                            <img src={capImg} alt="" />

                        </div>
                        <div className="circle">
                            <img src={circleImg} alt="" />

                        </div>
                    </div>
            </div>
            </Container>
        </div>
    );
};

export default Banner;