import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Carousel } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";
import styles from "./Contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel1 from "./assets/img/carousels1.jpg";
import carousel2 from "./assets/img/carousels2.jpg";
import logo from "./assets/img/logo.jpg";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w08czq7", // 🔹 Replace with your EmailJS Service ID
        "template_4b7n6gg", // 🔹 Replace with your EmailJS Template ID
        form.current,
        "_JmtvOdZbJncgreo0" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message, please try again.");
        }
      );
  };

  return (
    <>
      {/* Logo */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "100px", height: "100px", borderRadius: "10px" }}
        />
      </div>

      {/* Carousel Section */}
      <Carousel className={styles.carouselSection}>
        <Carousel.Item>
          <img src={carousel1} alt="Carousel 1" />
          <Carousel.Caption>
            <h3>Brigitte Men's Fashion</h3>
            <p>Premium Quality | Modern Style | Fast Delivery</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={carousel2} alt="Carousel 2" />
          <Carousel.Caption>
            <h3>Get in Touch With Us</h3>
            <p>We’d love to hear from you!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Contact Info */}
      <section className={styles.contactInfo}>
        <h2>Get in Touch</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <FaMapMarkerAlt className={styles.icon} />
            <h4>Visit Us</h4>
            <p>
              123 Style Street, Gandhipuram,
              <br />
              Coimbatore, Tamil Nadu - 641012
            </p>
          </div>

          <div className={styles.infoBox}>
            <FaPhoneAlt className={styles.icon} />
            <h4>Call / WhatsApp</h4>
            <p>
              📞 +91 6374068507
              <br />💬 <FaWhatsapp /> WhatsApp us anytime!
            </p>
          </div>

          <div className={styles.infoBox}>
            <FaEnvelope className={styles.icon} />
            <h4>Email</h4>
            <p>brigitte@mensfashionhub.com</p>
          </div>

          <div className={styles.infoBox}>
            <FaClock className={styles.icon} />
            <h4>Opening Hours</h4>
            <p>
              Mon - Sat: 9 AM - 8 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <h2>Contact Form</h2>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formRow}>
            <input type="text" name="first_name" placeholder="First Name" required />
            <input type="text" name="last_name" placeholder="Last Name" required />
          </div>
          <div className={styles.formRow}>
           <input type="text" name="mobile_number" placeholder="Mobile Number" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <textarea name="address" placeholder="Your Address" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Follow Us */}
      <section className={styles.followUs}>
        <h2>Follow Us</h2>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </section>

      {/* ✅ Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h3>Brigitte Men's Fashion</h3>
            <p>
              Premium menswear online store. Style, comfort, and quality delivered to your doorstep.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/collections">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4>Connect With Us</h4>
            <div className={styles.footerSocial}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <p className={styles.copyRight}>
          © {new Date().getFullYear()} Brigitte Men's Fashion Hub. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Contact;
