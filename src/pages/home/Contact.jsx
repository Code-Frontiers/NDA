import React from "react";
import msg_icon from "/assets/msg-icon.png";
import mail_icon from "/assets/mail-icon.png";
import phone_icon from "/assets/phone-icon.png";
import location_icon from "/assets/location-icon.png";
import white_arrow from "/assets/white-arrow.png";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ------Enter your web3forms access key below-------

        formData.append("access_key", "-----Enter your web3forms key----");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Send us a message <img src={msg_icon} alt="" />
                </h3>
                <p>
                    Feel free to reach out through contact form or find our contact information
                    below. Your feedback, questions, and suggestions are important to us as we
                    strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="" /> info@ndapl.com <br />
                        suresh@ndapl.com
                    </li>
                    <li>
                        <img src={phone_icon} alt="" />
                        +91 11 4132 8800
                        <br /> +91-99114-53500
                    </li>
                    <li>
                        <img src={location_icon} alt="" />
                        Office Address: New Dispensing Automation Pvt Ltd. Unit No-430, 4th Floor,
                        City Centre, Sector -12, Dwarka, New Delhi, 110075.
                        <br /> MA 02139, United States
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your mobile number"
                        required
                    />
                    <label>Write your messages here</label>
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                    <button type="submit" className="btn dark-btn">
                        Submit now <img src={white_arrow} alt="" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
