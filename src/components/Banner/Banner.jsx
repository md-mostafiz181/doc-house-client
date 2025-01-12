import "../../components/Banner/Banner.css"
import Container from "../Container/Container";

const Banner = () => {
    return (
        <div id="banner-part">
            <Container>
            <div className="banner-main grid lg:grid-cols-2 gap-3 sm:grid-cols-1">
                    <div className="banner-left   h-[300px]">
                        <h1 className="lg:text-7xl sm:text-1xl  font-normal text-white">Your Best Medical Help Center</h1>
                        <p className="mt-5 text-white">Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry’s stardard.</p>

                        <button className="btn-all-service">All Service</button>
                    </div>
                    <div className="banner-right bg-yellow-400  h-[300px]"></div>
            </div>
            </Container>
        </div>
    );
};

export default Banner;