import Container from "../../Container/Container";
import "../Footer/Footer.css"
import logoImg from "../../../assets/footerLogo.png"

const Footer = () => {
    return (
        <div className="footer-part">
           <div className="bg-base-200">
            <Container>
            <footer className="footer  text-base-content p-10">
                    <aside>
                        <img className="text-black" src={logoImg} alt="" />
                        <p className="text-black">
                        Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. has been <br /> since the printer took.
                        </p>
                        <button className=" footer_btn text-[#F7A582] font-bold">Appointment</button>
                    </aside>
                    
                    <nav >
                        <h6 className="text-2xl font-bold text-black">Quick Links</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Doctors</a>
                        <a className="link link-hover">Service</a>
                        <a className="link link-hover">Online payments</a>
                        <a className="link link-hover">My Account</a>
                        <a className="link link-hover">Contacts Us</a>
                    </nav>


                    <nav>
                        <h6 className="text-2xl font-bold text-black">Doc House Services</h6>
                        <a className="link link-hover">Pediatric Clinic</a>
                        <a className="link link-hover">Diagnosis Clinic</a>
                        <a className="link link-hover">Cardiac Clinic</a>
                        <a className="link link-hover">Laboratory Analysis</a>
                        <a className="link link-hover">Gynecological Clinic</a>
                        <a className="link link-hover">Personal Counseling</a>
                        <a className="link link-hover">Dental Clinic</a>
                    </nav>
                    <nav>
                        <h6 className="text-2xl font-bold text-black">Working Hours</h6>
                        <a className="link link-hover">Monday - 10 am to 7 pm</a>
                        <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                        <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
                        <a className="link link-hover">Thursday - 10 am to 7 pm</a>
                        <a className="link link-hover">Friday - 10 am to 7 pm</a>
                        <a className="link link-hover">Saturday - 10 am to 7 pm</a>
                        <a className="link link-hover">Sunday - 10 am to 7 pm</a>
                    </nav>
                   
            </footer>

            <hr />

            <footer className="text-center p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()}- All right reserved by Doc House Industries Ltd</p>
                </aside>
            </footer>
            </Container>
           </div>
        </div>
    );
};

export default Footer;