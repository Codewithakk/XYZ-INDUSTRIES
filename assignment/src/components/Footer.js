import React, { useState } from 'react';
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import "./Footer.css";

const Footer = () => {
   // State for the email input field
   const [email, setEmail] = useState('');

   // Function to handle form submission
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     try {
       // Make POST request to backend API
       const response = await fetch('/subscribe', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email }),
       });
 
       // Check if subscription was successful
       if (response.ok) {
         alert('Subscription successful!');
         setEmail(''); // Clear email input field
       } else {
         alert('Subscription failed. Please try again later.');
       }
     } catch (error) {
       console.error('Error:', error);
       alert('Subscription failed. Please try again later.');
     }
   };
  return (
    <footer className="footer1">
      <div className="footer2">
        <div className="about-us-wrapper">
          <div className="about-us">
            <div className="x-y-z-industries">
              <div className="real-estate-dreams-meet">
                <h1 className="xyz-industries1">
                  <span className="xyz2">
                    <span className="xyz3">XYZ</span>
                    <span className="span1">{` `}</span>
                  </span>
                  <i className="industries1">INDUSTRIES</i>
                </h1>
                <div className="xyz-industries-where">
                  XYZ Industries: Where real estate dreams meet seamless
                  transactions, transforming aspirations into achievements.
                </div>
              </div>
              <Button
                className="secondary-button2"
                endIcon={
                  <img
                    width="24px"
                    height="24px"
                    src="/arrow-forward-resting-3.svg"
                  />
                }
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20",
                  borderColor: "#fff",
                  borderRadius: "40px",
                  "&:hover": { borderColor: "#fff" },
                  width: 168,
                  height: 58,
                }}
              >
                EXPLORE
              </Button>
            </div>
            <div className="footer-frame1">
              <div className="quick-link-frame">
                <div className="quick-links">Quick Links</div>
                <div className="blog-frame">
                  <div className="testimonials-frame">
                    <div className="about-us1">About Us</div>
                  </div>
                  <div className="testimonials-frame1">
                    <div className="blog">Blog</div>
                  </div>
                  <div className="testimonials-frame2">
                    <div className="testimonials1">Testimonials</div>
                  </div>
                  <div className="testimonials-frame3">
                    <div className="terms-and-conditions1">
                      Terms and Conditions
                    </div>
                  </div>
                  <div className="testimonials-frame4">
                    <div className="privacy-policy">Privacy Policy</div>
                  </div>
                  <div className="testimonials-frame5">
                    <div className="site-map">Site Map</div>
                  </div>
                </div>
              </div>
              <div className="customer-support-frame">
                <div className="customer-support1">Customer Support</div>
                <div className="report-a-problem-frame">
                  <div className="request-a-call-back-frame">
                    <div className="feedback">Feedback</div>
                  </div>
                  <div className="request-a-call-back-frame1">
                    <div className="report-a-problem">Report a Problem</div>
                  </div>
                  <div className="request-a-call-back-frame2">
                    <div className="request-a-call">Request a Call Back</div>
                  </div>
                </div>
              </div>
              <div className="email-id-frame">
                <div className="email-id-frame1">
                  <div className="subscribe-us">Subscribe Us</div>
                  <div className="subscribe-to-newsletter1">
                    <div className="subscribe-to-our-weekly-newsle-wrapper">
                      <div className="subscribe-to-our">
                        Subscribe to our weekly newsletter
                      </div>
                    </div>
                  </div>
                </div>
                <div className="signup-form" onSubmit={handleSubmit}>
                  <TextField
                    className="email-input"
                    placeholder="Email Id"
                    variant="outlined"
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "42px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(7, 26, 69, 0.5)",
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    className="email-input1"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#3a7dff",
                      borderRadius: "8px",
                      "&:hover": { background: "#3a7dff" },
                      height: 42,
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line">
          <img
            className="line-child"
            loading="lazy"
            alt=""
            src="/line-200.svg"
          />
          <div className="frame-parent">
            <div className="youtube-parent">
              <img
                className="youtube-icon"
                loading="lazy"
                alt=""
                src="/youtube@2x.png"
              />
              <img
                className="twitter-icon"
                loading="lazy"
                alt=""
                src="/twitter.svg"
              />
              <img
                className="instagram-icon"
                loading="lazy"
                alt=""
                src="/instagram@2x.png"
              />
              <img
                className="facebook-icon"
                loading="lazy"
                alt=""
                src="/facebook.svg"
              />
            </div>
            <div className="frame-container">
              <div className="terms-privacy-parent">
                <div className="terms-privacy">
                  <div className="terms">Terms</div>
                </div>
                <img
                  className="frame-child"
                  loading="lazy"
                  alt=""
                  src="/line-201.svg"
                />
                <div className="terms-privacy1">
                  <div className="privacy">Privacy</div>
                </div>
              </div>
              <div className="copyright-parent">
                <img
                  className="copyright-icon"
                  loading="lazy"
                  alt=""
                  src="/copyright.svg"
                />
                <div className="copyright-info">
                  <div className="xyz4">2024 XYZ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
