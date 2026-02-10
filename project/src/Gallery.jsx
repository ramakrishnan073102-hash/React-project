import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./Gallery.module.css";
import logo from "./assets/img/logo.jpg"; 


import shirt1 from "./assets/img/Shirt/shirt1.jpg";
import shirt2 from "./assets/img/Shirt/shirt2.jpg";
import shirt3 from "./assets/img/Shirt/shirt3.jpg";
import shirt4 from "./assets/img/Shirt/shirt4.avif";
import shirt5 from "./assets/img/Shirt/shirt5.avif";
import shirt6 from "./assets/img/Shirt/shirt6.jpg";
import shirt7 from "./assets/img/Shirt/shirt7.jpg";
import shirt8 from "./assets/img/Shirt/shirt8.jpg";

import polo1 from './assets/img/Polos/polo1.webp'
import polo2 from './assets/img/Polos/polo2.webp'
import polo3 from './assets/img/Polos/polo3.webp'
import polo4 from './assets/img/Polos/polo4.webp'
import polo5 from './assets/img/Polos/polo5.webp'
import polo6 from './assets/img/Polos/polo6.webp'
import polo7 from './assets/img/Polos/polo7.webp'
import polo8 from './assets/img/Polos/polo8.webp'


import tshirt1 from './assets/img/T-Shirt/T-shirt1.webp'
import tshirt2 from './assets/img/T-Shirt/T-shirt2.webp'
import tshirt3 from './assets/img/T-Shirt/T-shirt3.webp'
import tshirt4 from './assets/img/T-Shirt/T-shirt4.webp'
import tshirt5 from './assets/img/T-Shirt/T-shirt5.webp'
import tshirt6 from './assets/img/T-Shirt/T-shirt6.webp'
import tshirt7 from './assets/img/T-Shirt/T-shirt7.webp'
import tshirt8 from './assets/img/T-Shirt/T-shirt8.webp'


import jeans1 from './assets/img/Jeans/jeans1.webp'
import jeans2 from './assets/img/Jeans/jeans2.jpg'
import jeans3 from './assets/img/Jeans/jeans3.webp'
import jeans4 from './assets/img/Jeans/jeans4.webp'
import jeans5 from './assets/img/Jeans/jeans5.webp'
import jeans6 from './assets/img/Jeans/jeans6.webp'
import jeans7 from './assets/img/Jeans/jeans7.webp'


import hoodie1 from './assets/img/Hoodies/hoodie1.webp'
import hoodie2 from './assets/img/Hoodies/hoodie2.webp'
import hoodie3 from './assets/img/Hoodies/hoodie3.webp'
import hoodie4 from './assets/img/Hoodies/hoodie4.webp'
import hoodie5 from './assets/img/Hoodies/hoodie5.webp'
import hoodie6 from './assets/img/Hoodies/hoodie6.webp'
import hoodie7 from './assets/img/Hoodies/hoodie7.jpg'
import hoodie8 from './assets/img/Hoodies/hoodie8.webp'

function Gallery() {
   const items = [
    { id: 1, image: shirt1 },
    { id: 2, image: shirt2 },
    { id: 3, image: shirt3 },
    { id: 4, image: shirt4 },
    { id: 5, image: shirt5 },
    { id: 6, image: shirt6 },
    { id: 7, image: shirt7 },
    { id: 8, image: shirt8 },
    { id: 9, image: tshirt1 },
    { id: 10, image:tshirt2 },
     { id: 11, image: tshirt3 },
    { id: 12, image: tshirt4 },
    { id: 13, image: tshirt5 },
    { id: 14, image: tshirt6 },
    { id: 15, image: tshirt7 },
    { id: 16, image: tshirt8 },
    { id: 17, image: polo1 },
    { id: 18, image: polo2 },
    { id: 19, image: polo3 },
    { id: 20, image: polo4 },
     { id: 21, image: polo5 },
    { id: 22, image: polo6 },
    { id: 23, image: polo7 },
    { id: 24, image: polo8 },
    { id: 25, image: jeans1 },
    { id: 26, image: jeans2 },
    { id: 27, image: jeans3 },
    { id: 28, image: jeans4 },
    { id: 29, image: jeans5 },
    { id: 30, image: jeans6 },
     { id: 31, image: jeans7 },
    { id: 32, image: hoodie1 },
    { id: 33, image: hoodie2 },
    { id: 34, image: hoodie3},
    { id: 35, image: hoodie4 },
    { id: 36, image: hoodie5 },
     { id: 37, image: hoodie6 },
      { id: 38, image: hoodie7 },
       { id: 39, image: hoodie8 },
    
  ];

  return (
    <>
      {/* ===== Navbar ===== */}
      <Navbar expand="lg" bg="black" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className={styles.navBrand}>
            <img
              src={logo}
              alt="Logo"
              className={styles.navLogo}
            />{" "}
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
               <Nav.Link href="/collections">Collections</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== Gallery Section ===== */}
      <div id="gallery" className={styles.galleryContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Gallery</h1>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt="Men's Fashion" className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
