import React, { useState } from "react";
import styles from "./Collections.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import logo from "./assets/img/logo.jpg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";


// Import shirt images
import shirt1 from "./assets/img/Shirt/shirt1.jpg";
import shirt2 from "./assets/img/Shirt/shirt2.jpg";
import shirt3 from "./assets/img/Shirt/shirt3.jpg";
import shirt4 from "./assets/img/Shirt/shirt4.avif";
import shirt5 from "./assets/img/Shirt/shirt5.avif";
import shirt6 from "./assets/img/Shirt/shirt6.jpg";
import shirt7 from "./assets/img/Shirt/shirt7.jpg";
import shirt8 from "./assets/img/Shirt/shirt8.jpg";
import shirt9 from "./assets/img/Shirt/shirt9.jpg";
import shirt10 from "./assets/img/Shirt/shirt10.jpg";
import shirt11 from "./assets/img/Shirt/shirt11.webp";
import shirt12 from "./assets/img/Shirt/shirt12.webp";
import shirt13 from "./assets/img/Shirt/shirt13.webp";
import shirt14 from "./assets/img/Shirt/shirt14.webp";
import shirt15 from "./assets/img/Shirt/shirt15.webp";
import shirt16 from "./assets/img/Shirt/shirt16.webp";
import shirt17 from "./assets/img/Shirt/shirt17.webp";
import shirt18 from "./assets/img/Shirt/shirt18.webp";
import shirt19 from "./assets/img/Shirt/shirt19.webp";
import shirt20 from "./assets/img/Shirt/shirt20.webp";

//Import T-Shirts images
import tshirt1 from './assets/img/T-Shirt/T-shirt1.webp'
import tshirt2 from './assets/img/T-Shirt/T-shirt2.webp'
import tshirt3 from './assets/img/T-Shirt/T-shirt3.webp'
import tshirt4 from './assets/img/T-Shirt/T-shirt4.webp'
import tshirt5 from './assets/img/T-Shirt/T-shirt5.webp'
import tshirt6 from './assets/img/T-Shirt/T-shirt6.webp'
import tshirt7 from './assets/img/T-Shirt/T-shirt7.webp'
import tshirt8 from './assets/img/T-Shirt/T-shirt8.webp'
import tshirt9 from './assets/img/T-Shirt/T-shirt9.webp'
import tshirt10 from './assets/img/T-Shirt/T-shirt10.webp'
import tshirt11 from './assets/img/T-Shirt/T-shirt11.webp'
import tshirt12 from './assets/img/T-Shirt/T-shirt12.webp'
import tshirt13 from './assets/img/T-Shirt/T-shirt13.webp'
import tshirt14 from './assets/img/T-Shirt/T-shirt14.webp'
import tshirt15 from './assets/img/T-Shirt/T-shirt15.webp'
import tshirt16 from './assets/img/T-Shirt/T-shirt16.webp'
import tshirt17 from './assets/img/T-Shirt/T-shirt17.webp'
import tshirt18 from './assets/img/T-Shirt/T-shirt18.webp'
import tshirt19 from './assets/img/T-Shirt/T-shirt19.webp'
import tshirt20 from './assets/img/T-Shirt/T-shirt20.webp'

//import Polo T-Shirt img
import polo1 from './assets/img/Polos/polo1.webp'
import polo2 from './assets/img/Polos/polo2.webp'
import polo3 from './assets/img/Polos/polo3.webp'
import polo4 from './assets/img/Polos/polo4.webp'
import polo5 from './assets/img/Polos/polo5.webp'
import polo6 from './assets/img/Polos/polo6.webp'
import polo7 from './assets/img/Polos/polo7.webp'
import polo8 from './assets/img/Polos/polo8.webp'
import polo9 from './assets/img/Polos/polo9.webp'
import polo10 from './assets/img/Polos/polo10.webp'
import polo11 from './assets/img/Polos/polo11.webp'
import polo12 from './assets/img/Polos/polo12.webp'
import polo13 from './assets/img/Polos/polo13.webp'
import polo14 from './assets/img/Polos/polo14.webp'
import polo15 from './assets/img/Polos/polo15.webp'
import polo16 from './assets/img/Polos/polo16.webp'
import polo17 from './assets/img/Polos/polo17.webp'
import polo18 from './assets/img/Polos/polo18.webp'
import polo19 from './assets/img/Polos/polo19.webp'
import polo20 from './assets/img/Polos/polo20.webp'

//import Jeans img
import jeans1 from './assets/img/Jeans/jeans1.webp'
import jeans2 from './assets/img/Jeans/jeans2.jpg'
import jeans3 from './assets/img/Jeans/jeans3.webp'
import jeans4 from './assets/img/Jeans/jeans4.webp'
import jeans5 from './assets/img/Jeans/jeans5.webp'
import jeans6 from './assets/img/Jeans/jeans6.webp'
import jeans7 from './assets/img/Jeans/jeans7.webp'
import jeans8 from './assets/img/Jeans/jeans8.webp'
import jeans9 from './assets/img/Jeans/jeans9.webp'
import jeans10 from './assets/img/Jeans/jeans10.jpg'
import jeans11 from './assets/img/Jeans/jeans11.webp'
import jeans12 from './assets/img/Jeans/jeans12.webp'
import jeans13 from './assets/img/Jeans/jeans13.webp'
import jeans14 from './assets/img/Jeans/jeans14.webp'
import jeans15 from './assets/img/Jeans/jeans15.webp'
import jeans16 from './assets/img/Jeans/jeans16.webp'
import jeans17 from './assets/img/Jeans/jeans17.webp'
import jeans18 from './assets/img/Jeans/jeans18.webp'
import jeans19 from './assets/img/Jeans/jeans19.jpg'
import jeans20 from './assets/img/Jeans/jeans20.webp'

//import hoodies img
import hoodie1 from './assets/img/Hoodies/hoodie1.webp'
import hoodie2 from './assets/img/Hoodies/hoodie2.webp'
import hoodie3 from './assets/img/Hoodies/hoodie3.webp'
import hoodie4 from './assets/img/Hoodies/hoodie4.webp'
import hoodie5 from './assets/img/Hoodies/hoodie5.webp'
import hoodie6 from './assets/img/Hoodies/hoodie6.webp'
import hoodie7 from './assets/img/Hoodies/hoodie7.jpg'
import hoodie8 from './assets/img/Hoodies/hoodie8.webp'
import hoodie9 from './assets/img/Hoodies/hoodie9.webp'
import hoodie10 from './assets/img/Hoodies/hoodie10.webp'
import hoodie11 from './assets/img/Hoodies/hoodie11.jpg'
import hoodie12 from './assets/img/Hoodies/hoodie12.webp'
import hoodie13 from './assets/img/Hoodies/hoodie13.webp'
import hoodie14 from './assets/img/Hoodies/hoodie14.webp'
import hoodie15 from './assets/img/Hoodies/hoodie15.jpg'
import hoodie16 from './assets/img/Hoodies/hoodie16.webp'
import hoodie17 from './assets/img/Hoodies/hoodie17.jpg'
import hoodie18 from './assets/img/Hoodies/hoodie18.webp'
import hoodie19 from './assets/img/Hoodies/hoodie19.webp'
import hoodie20 from './assets/img/Hoodies/hoodie20.webp'




// ... (add remaining shirt imports)

// === Products Data by Category ===
const products = {
  shirts: [
    { id: 1, name: "Classic Formal Shirt", price: 1299, offer: "20% OFF", image: shirt1 },
    { id: 2, name: "Checked Blue Shirt", price: 999, offer: "15% OFF", image: shirt2 },
    { id: 3, name: "Checked Blue Shirt", price: 499, offer: "25% OFF", image: shirt3 },
    { id: 4, name: "Formal Yellow Shirt", price: 599, offer: "25% OFF", image: shirt4 },
    { id: 5, name: "Formal  Sky-blue Shirt", price: 699, offer: "25% OFF", image: shirt5 },
    { id: 6, name: "Formal  Gray Shirt", price: 799, offer: "25% OFF", image: shirt6 },
    { id: 7, name: "Checked Blue Shirt", price: 1299, offer: "25% OFF", image: shirt7 },
    { id: 8, name: "Checked  Shirt", price: 499, offer: "25% OFF", image: shirt8 },
    { id: 9, name: "Checked Brown Shirt", price: 699, offer: "25% OFF", image: shirt9 },
    { id: 10, name: "Checked  Shirt", price: 699, offer: "25% OFF", image: shirt10 },
    { id: 11, name: "Checked  Shirt", price: 999, offer: "25% OFF", image: shirt11 },
    { id: 12, name: "Printed Shirt", price: 499, offer: "25% OFF", image: shirt12 },
    { id: 13, name: "Checked White Shirt", price: 599, offer: "25% OFF", image: shirt13 },
    { id: 14, name: "Checked Blue Shirt", price: 1199, offer: "25% OFF", image: shirt14 },
    { id: 15, name: "Formal  Shirt", price: 1599, offer: "25% OFF", image: shirt15 },
    { id: 16, name: "Checked White Shirt", price: 1299, offer: "25% OFF", image: shirt16 },
    { id: 17, name: "Checked Blue Shirt", price: 1399, offer: "25% OFF", image: shirt17 },
    { id: 18, name: "Checked  Shirt", price: 899, offer: "25% OFF", image: shirt18 },
    { id: 19, name: "Plain White Shirt", price: 699, offer: "25% OFF", image: shirt19 },
    { id: 20, name: "Checked Red Shirt", price: 399, offer: "25% OFF", image: shirt20 },
  ],
  tshirts: [
    { id: 1, name: "Casual T-Shirt", price: 799, offer: "10% OFF", image: tshirt1 },
    { id: 2, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt2 },
    { id: 3, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt3 },
    { id: 4, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt4 },
    { id: 5, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt5 },
    { id: 6, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt6 },
    { id: 7, name: "Casual T-Shirt", price: 799, offer: "10% OFF", image: tshirt7 },
    { id: 8, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt8 },
    { id: 9, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt9 },
    { id: 10, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt10 },
    { id: 11, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt11 },
    { id: 12, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt12 },
    { id: 13, name: "Casual T-Shirt", price: 799, offer: "10% OFF", image: tshirt13 },
    { id: 14, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt14 },
    { id: 15, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt15 },
    { id: 16, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt16 },
    { id: 17, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt17 },
    { id: 18, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt18 },
    { id: 19, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt19 },
    { id: 20, name: "Printed T-Shirt", price: 899, offer: "20% OFF", image: tshirt20 },



  ],
  polos: [
    { id: 1, name: "Classic Polo", price: 1199, offer: "25% OFF", image: polo1 },
    { id: 2, name: "Striped Polo", price: 1399, offer: "30% OFF", image: polo2 },
    { id: 3, name: "Classic Polo", price: 1499, offer: "25% OFF", image: polo3 },
    { id: 4, name: "Classic Polo", price: 1299, offer: "25% OFF", image: polo4 },
    { id: 5, name: "Classic Polo", price: 599, offer: "25% OFF", image: polo5 },
    { id: 6, name: "Classic Polo", price: 899, offer: "25% OFF", image: polo6 },
    { id: 7, name: "Classic Polo", price: 499, offer: "25% OFF", image: polo7 },
    { id: 8, name: "Classic Polo", price: 1199, offer: "25% OFF", image: polo8 },
    { id: 9, name: "Classic Polo", price: 1399, offer: "25% OFF", image: polo9 },
    { id: 10, name: "Classic Polo", price: 1199, offer: "25% OFF", image: polo10 },
    { id: 11, name: "Classic Polo", price: 799, offer: "25% OFF", image: polo11 },
    { id: 12, name: "Classic Polo", price: 599, offer: "25% OFF", image: polo12 },
    { id: 13, name: "Classic Polo", price: 799, offer: "25% OFF", image: polo13 },
    { id: 14, name: "Classic Polo", price: 499, offer: "25% OFF", image: polo14 },
    { id: 15, name: "Classic Polo", price: 1499, offer: "25% OFF", image: polo15 },
    { id: 16, name: "Classic Polo", price: 1299, offer: "25% OFF", image: polo16 },
    { id: 17, name: "Classic Polo", price: 999, offer: "25% OFF", image: polo17 },
    { id: 18, name: "Classic Polo", price: 799, offer: "25% OFF", image: polo18 },
    { id: 19, name: "Classic Polo", price: 599, offer: "25% OFF", image: polo19 },
    { id: 20, name: "Classic Polo", price: 899, offer: "25% OFF", image: polo20 },
  ],
  jeans: [
    { id: 1, name: "Slim Fit Jeans", price: 1999, offer: "15% OFF", image: jeans1 },
    { id: 2, name: "Regular Fit Jeans", price: 1799, offer: "10% OFF", image: jeans2 },
    { id: 3, name: "Cargo Fit Jeans", price: 1899, offer: "10% OFF", image: jeans3 },
    { id: 4, name: "Regular Fit Jeans", price: 1499, offer: "10% OFF", image: jeans4 },
    { id: 5, name: "Regular Fit Jeans", price: 1599, offer: "10% OFF", image: jeans5 },
    { id: 6, name: "Regular Fit Jeans", price: 1299, offer: "10% OFF", image: jeans6 },
    { id: 7, name: "Regular Fit Jeans", price: 1199, offer: "10% OFF", image: jeans7 },
    { id: 8, name: "Regular Fit Jeans", price: 1799, offer: "10% OFF", image: jeans8 },
    { id: 9, name: "Regular Fit Jeans", price: 1899, offer: "10% OFF", image: jeans9 },
    { id: 10, name: "Regular Fit Jeans", price: 1499, offer: "10% OFF", image: jeans10 },
    { id: 11, name: "Regular Fit Jeans", price: 1699, offer: "10% OFF", image: jeans11 },
    { id: 12, name: "Regular Fit Jeans", price: 1299, offer: "10% OFF", image: jeans12 },
    { id: 13, name: "Regular Fit Jeans", price: 1199, offer: "10% OFF", image: jeans13 },
    { id: 14, name: "Regular Fit Jeans", price: 1699, offer: "10% OFF", image: jeans14 },
    { id: 15, name: "Regular Fit Jeans", price: 1399, offer: "10% OFF", image: jeans15 },
    { id: 16, name: "Regular Fit Jeans", price: 1299, offer: "10% OFF", image: jeans16 },
    { id: 17, name: "Regular Fit Jeans", price: 1999, offer: "10% OFF", image: jeans17 },
    { id: 18, name: "Regular Fit Jeans", price: 1599, offer: "10% OFF", image: jeans18 },
    { id: 19, name: "Regular Fit Jeans", price: 1199, offer: "10% OFF", image: jeans19 },
    { id: 20, name: "Regular Fit Jeans", price: 1799, offer: "10% OFF", image: jeans20 },
  ],
  hoodies: [
    { id: 1, name: "Winter Hoodie", price: 1499, offer: "20% OFF", image: hoodie1 },
    { id: 2, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie2 },
    { id: 3, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie3 },
    { id: 4, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie4 },
    { id: 5, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie5 },
    { id: 6, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie6 },
    { id: 7, name: "Winter Hoodie", price: 1499, offer: "20% OFF", image: hoodie7 },
    { id: 8, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie8 },
    { id: 9, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie9 },
    { id: 10, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie10 },
    { id: 11, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie11 },
    { id: 12, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie12 },
    { id: 13, name: "Winter Hoodie", price: 1499, offer: "20% OFF", image: hoodie13 },
    { id: 14, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie14 },
    { id: 15, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie15 },
    { id: 16, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie16 },
    { id: 17, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie17 },
    { id: 18, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie18 },
    { id: 19, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie19 },
    { id: 20, name: "Casual Hoodie", price: 1699, offer: "30% OFF", image: hoodie20 },
  ],
};

function Products() {
  const [category, setCategory] = useState("shirts");
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  // Add to Cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increase / Decrease Quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
  setCart((prevCart) => {
    const updatedCart = prevCart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    return updatedCart;
  });
};


  // Checkout
  const handleCheckout = () => {
    setShowCheckout(true);
  };

  // ✅ Updated sendEmail() function
const sendEmail = (e) => {
  e.preventDefault();

  const templateParams = {
    first_name: customer.firstName,
    last_name: customer.lastName,
    mobile_number: customer.mobile,
    email: customer.email,
    address: customer.address,
    order_items: cart
      .map((item) => `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`)
      .join("\n"),
    total_amount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
  };

  emailjs
    .send(
      "service_w08czq7",   // ✅ Your EmailJS Service ID
      "template_4b7n6gg",  // ✅ Your EmailJS Template ID
      templateParams,
      "_JmtvOdZbJncgreo0"  // ✅ Your EmailJS Public Key
    )
    .then(
      (response) => {
        console.log("✅ Email sent successfully!", response.status, response.text);
        alert("✅ Order placed successfully! Check your email for confirmation.");
      },
      (error) => {
        console.error("❌ Email send error:", error);
        alert(" ❌ Failed to send order details. Try again.");
      }
    );
};


  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className={styles.bodytertiary}>
        <Container>
          <img className={styles.logo} src={logo} alt="Logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "white", filter: "invert(1)" }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navmain}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link onClick={() => setCategory("shirts")}>Shirts</Nav.Link>
              <Nav.Link onClick={() => setCategory("tshirts")}>T-Shirts</Nav.Link>
              <Nav.Link onClick={() => setCategory("polos")}>Polos</Nav.Link>
              <Nav.Link onClick={() => setCategory("jeans")}>Jeans</Nav.Link>
              <Nav.Link onClick={() => setCategory("hoodies")}>Hoodie</Nav.Link>
            </Nav>

            <div className={styles.cartIcon}>
              <FaShoppingCart size={28} />
              <span className={styles.cartCount}>{cart.length}</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br /><br />

      {/* Product Cards */}
      <div className={styles.container}>
        {products[category].map((item) => {
          const inCart = cart.find((c) => c.id === item.id);
          return (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <h3>{item.name}</h3>
              <p className={styles.price}>₹{item.price}</p>
              <p className={styles.offer}>{item.offer}</p>
              {inCart ? (
                <div className={styles.qtyControls}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{inCart.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              ) : (
                <button className={styles.cartBtn} onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className={styles.cartSection}>
          <h2>Your Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.cartImage} />
              <div className={styles.cartDetails}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div className={styles.qtyControls}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <h3>
            Total: ₹
            {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </h3>
          <button className={styles.orderBtn} onClick={handleCheckout}>
            Order Now
          </button>
        </div>
      )}

    
{showCheckout && (
  <div className={styles.checkoutForm}>
    <h2>Enter Delivery & Payment Details</h2>

    <form onSubmit={sendEmail} className={styles.contactForm}>
      <div className={styles.formRow}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={customer.firstName}
          onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={customer.lastName}
          onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })}
          required
        />
      </div>

      <div className={styles.formRow}>
        <input
  type="text"
  name="mobile_number"
  placeholder="Mobile Number"
  value={customer.mobile}
  onChange={(e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomer({ ...customer, mobile: value });
    }
  }}
  maxLength={10}
  required
/>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        />
      </div>

      <textarea
        name="address"
        placeholder="Delivery Address"
        rows="5"
        value={customer.address}
        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
        required
      ></textarea>

      {/* 💳 Payment Section */}
      <div className={styles.paymentSection}>
        <h3>Payment Method</h3>
        <div className={styles.paymentOptions}>
          <label>
            <input type="radio" name="payment" value="cod" defaultChecked /> Cash on Delivery
          </label>
          <label>
            <input type="radio" name="payment" value="upi" /> UPI / Google Pay
          </label>
          <label>
            <input type="radio" name="payment" value="card" /> Credit / Debit Card
          </label>
        </div>

        <div className={styles.cardDetails}>
          <input type="text" placeholder="Card Number" maxLength="16" />
          <div className={styles.cardRow}>
            <input type="text" placeholder="MM/YY" maxLength="5" />
            <input type="text" placeholder="CVV" maxLength="3" />
          </div>
        </div>
      </div>

      {/* 🧾 Price Details */}
      <div className={styles.priceDetails}>
        <h3>Price Details</h3>
        {cart.map((item) => (
          <div key={item.id} className={styles.priceItem}>
            <p>
              {item.name} (x{item.quantity})
            </p>
            <p>₹{item.price * item.quantity}</p>
          </div>
        ))}
        <hr />
        <div className={styles.totalAmount}>
          <strong>Total Amount:</strong>
          <strong>
            ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </strong>
        </div>
      </div>

      <button type="submit" className={styles.confirmBtn}>
        Confirm & Pay
      </button>
    </form>
  </div>
)}




      {/* ✅ Order Confirmation */}
      {orderPlaced && (
        <div className={styles.orderMsg}>
          <div className={styles.tickMark}>✅</div>
          <h2 className={styles.congrats}>Congratulations!</h2>
          <p>Your order has been placed successfully 🎉</p>
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h3 className={styles.logo}>Brigitte Men's Store</h3>
            <p className={styles.about}>
              Your one-stop destination for the latest trends in fashion.
              Quality, comfort, and style — all in one place.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Products</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact Us</h4>
            <p>Email: brigitte@mensfashionhub.com</p>
            <p>Phone: +91 63740 68507</p>

            <div className={styles.socialIcons}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Brigitte Men’s Fashion Hub. All Rights Reserved.</p>
        </div>
      </footer>

    </>
  );
}

export default Products;