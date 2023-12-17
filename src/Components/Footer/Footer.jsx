import cls from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={cls.Footer}>
            <div className={cls.FChild1}>
                <div className={cls.FChildSection}>
                    <div>COUSTOMER SERVICES
                        <p>Contact Us</p>
                        <p>Track your Order</p>
                        <p>Shiping & Returns</p>
                        <p>Fraquently Asked Qouestions</p>
                        <p>Schedule an appointment</p>
                    </div>
                    <div>ABOUT US
                        <p>Origins</p>
                        <p>Our Purpose</p>
                        <p>Careers</p>
                        <p>Sustainability</p>
                        <p>Giving Back</p>
                    </div>
                    <div>MATERIAL CARE
                        <p>Jewelry Repair</p>
                        <p>Ring Sizing</p>
                        <p>Metal Allergy Resources</p>
                        <p>Styling Tips</p>
                    </div>
                    <div>MAIN LOCATIONS
                        <p>Chicago,IL</p>
                        <p>San Francisco,CA</p>
                        <p>New York,NY</p>
                        <p>Seattle,WA</p>
                    </div>
                </div>
                <div className={cls.AppolLLC}>APOLLONIAN, LLC</div>
            </div>
            <div className={cls.FChild2}>
                <h3>You can be one step ahead</h3>
                <p>Sign up to hear about our updates on the dor.</p>
                <div className={cls.SignDiv}>
                    <input type="email" placeholder="Your email address" />
                    <div className={cls.SignUP}>SIGN UP</div>
                </div>
                <div className={cls.IconsDiv}>
                    <div><FaInstagram /></div>
                    <div><FaTwitter /></div>
                    <div><FaFacebook /></div>
                    <div><FaYoutube /></div>
                    <div><FaLinkedin /></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;