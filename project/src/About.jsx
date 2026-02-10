import React from "react";
import styles from "./About.module.css";
import aboutImg from "./assets/img/Hoodies/hoodie1.webp";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from './assets/img/logo.jpg';

function About() {
  return (
    <>
   
  <img src={logo} alt="" style={{width: "100px", height: "100px", justifyContent: "center"}} />
      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>
            Welcome to <strong>Brigitte Men's Fashion</strong>
          </p>
          <p className={styles.text}>
            At <strong>Brigitte Men's Fashion</strong>, we believe style is more than just what
            you wear — it’s how you express yourself. Founded in 2020, our mission is to make
            premium-quality fashion accessible to every man who values comfort, confidence,
            and individuality.
          </p>
          <p className={styles.text}>
            We specialize in a wide range of men’s apparel — from shirts, t-shirts, and jeans
            to polos, hoodies, and formal wear. Our team handpicks every piece to ensure the
            perfect blend of quality, fit, and style.
          </p>
          <p className={styles.text}>
            Whether you're dressing for work, a night out, or a casual weekend, we’ve got you
            covered. Experience effortless online shopping with secure payment options, fast
            delivery, and dedicated customer service.
          </p>
          <p className={styles.signature}>— Team Brigitte Men’s Fashion 👕</p>
        </div>

        <div className={styles.imageSection}>
          <img src={aboutImg} alt="Men's Fashion" className={styles.image} />
        </div>
      </div>

      {/* ===== Footer Section ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h3>Brigitte Men's Fashion</h3>
            <p>
              Premium menswear online store. Style, comfort, and quality delivered to your
              doorstep.
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
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <p className={styles.copyRight}>
          &copy; {new Date().getFullYear()} Brigitte Men's Fashion Hub. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default About;
