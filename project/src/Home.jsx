
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/img/logo.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// Carousel Images
import carousel1 from './assets/img/carousels1.jpg';
import carousel2 from './assets/img/carousels2.jpg';
import carousel3 from './assets/img/carousels3.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Collection Images
import shirtImg from './assets/img/collectionshirt.jpg';
import tshirtImg from './assets/img/collectionT-shirt.jpg';
import poloImg from './assets/img/collectionPolo.jpg';
import jeansImg from './assets/img/collectionJeans.jpg';
import styles from './Home.module.css'

//float img
import float from './assets/img/floatImg.jpg'

//Photos
import img1 from './assets/img/1.avif'
import img2 from './assets/img/2.avif'
import img3 from './assets/img/3.avif'
import img4 from './assets/img/4.avif'
import img5 from './assets/img/5.avif'
import img6 from './assets/img/6.avif'
import img7 from './assets/img/7.avif'
import img8 from './assets/img/8.avif'
import img9 from './assets/img/9.avif'
import img10 from './assets/img/10.avif'
import img11 from './assets/img/11.avif'
import img12 from './assets/img/12.avif'


//Hoodie
import hood1 from './assets/img/hoodie1.jpg'
import hood2 from './assets/img/hoodie2.jpg'

//Polos
import polo1 from './assets/img/polo1.jpg'
import polo2 from './assets/img/polo2.jpg'

//Jeans
import jeans1 from './assets/img/jeans1.jpg'
import jeans2 from './assets/img/jeans2.jpg'


//Font
import 'typeface-roboto';




function Home() {

  const { isLoggedIn, setIsLoggedIn } = useAuth();
  

  
  return (
    <>

    {/* Marquee */}

    <div style={{ width: "100%", background: "black", color: "white", padding: "10px" }}>
      <marquee 
      // gradient={false}
       speed={60}>
        🚀 Welcome to our Online Store! | 🎉 Big Sale on Men’s Wear | 🛒 Free Shipping on Orders Above ₹999 |
        🚀 Welcome to our Online Store! | 🎉 Big Sale on Men’s Wear | 🛒 Free Shipping on Orders Above ₹999 |
         🚀 Welcome to our Online Store! | 🎉 Big Sale on Men’s Wear | 🛒 Free Shipping on Orders Above ₹999 |
        

      </marquee>
    </div>
    
    {/**Navbar */}
    

       <Navbar expand="lg" className={styles.bodytertiary}>
      <Container>
        <img className={styles.logo} src={logo} alt="" />
       <Navbar.Toggle 
  aria-controls="basic-navbar-nav" 
  style={{ borderColor: "white" }}
>
  <span 
    className="navbar-toggler-icon" 
    style={{
      backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")"
    }} 
  />
</Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navmain}>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link as={Link} to="/gallery">GALLERY</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
             <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>

           <Link to="/collections" style={{ textDecoration: "none"}}>
           {/* <Nav.Link href='/products'>COLLEACTIONS </Nav.Link> */}
           
            </Link> 
          </Nav>


 


        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    {/*Carousels*/}

     <Carousel className={styles.Carousel}>
      <Carousel.Item>
       <img src={carousel1} alt="" />
        <Carousel.Caption className={styles.Caption}>
          <h2>Step Into His Style</h2>
          <h4>Sneakers for Men • Buy 1 Get 1 Half Price</h4>
         <Link to="collections" state={{textDecoration: "none"}}> <button>Shop Now</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={carousel2} alt="" />
        <Carousel.Caption className={styles.Caption}>
          <h1>Casual T-Shirts • Flat 40% Off – Everyday Comfort, Everyday Style</h1>
          <Link to="collections" state={{textDecoration: "none"}}> <button>Shop Now</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel3} alt="" />
       <Carousel.Caption className={styles.Caption}>
          <h1>Denim Jeans • Starting from ₹999 – Rugged Looks for Modern Men</h1>
          <Link to="collections" state={{textDecoration: "none"}}> <button>Shop Now</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <br /><br /><br />
   
 <h1 style={{textAlign: "center", fontFamily: "serif"}}>COLLECTIONS</h1>

 <br /><br /><br />

  {/* Card */}

  <div className={styles.collectioncard}>
   
    <Card  style={{ width: '18rem',}}>
     <img style={{height: "250px"}} src={shirtImg} alt="" />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>Shirts</Card.Title>
        <Card.Text className={styles.cardText}>
          “Discover shirts that blend comfort and class. Whether it’s a casual day out or a sharp office look, our collection keeps you stylish all day long.”
        </Card.Text>
       <Link to="/collections" style={{textDecoration: "none"}}> <Button className={styles.collectionbtn} >Buy Now</Button></Link>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <img style={{height: "250px"}}  src={tshirtImg} alt="" />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>T-Shirts</Card.Title>
        <Card.Text className={styles.cardText}>
         "A collection of timeless plain T-shirts designed for everyday wear. Crafted with soft cotton and clean cuts, these tees are perfect for pairing sharp office look."
        </Card.Text>
        <Link to="/collections" style={{textDecoration: "none"}}> <Button className={styles.collectionbtn} >Buy Now</Button></Link>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <img style={{height: "250px"}}  src={poloImg} alt="" />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>Polos</Card.Title>
        <Card.Text className={styles.cardText}>
          "Timeless and versatile, these polos bring effortless style to any occasion. Perfectly tailored with soft cotton and clean collars, they’re a must comfort and durability."
        </Card.Text>
          <Link to="/collections" style={{textDecoration: "none"}}> <Button className={styles.collectionbtn} >Buy Now</Button></Link>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
       <img style={{height: "250px"}}  src={jeansImg} alt="" />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>Jeans</Card.Title>
        <Card.Text className={styles.cardText}>
         "A timeless wardrobe staple. These straight-fit jeans offer comfort and durability, perfect for everyday  clean collars wear with effortless style."
        </Card.Text>
        <Link to="/collections" style={{textDecoration: "none"}}> <Button className={styles.collectionbtn} >Buy Now</Button></Link>
      </Card.Body>
    </Card>
 </div>

 <div className={styles.float}>

  <div className={styles.floatImg}><img src={float} alt="" /></div>

 <div className={styles.floatPara}>

  <p>"Step into a world where style meets confidence.
Our men’s collection is crafted to redefine everyday fashion.
From classic T-shirts to sharp polos, every piece speaks of comfort and class.
Discover jeans that fit like a second skin, designed for both work and weekends.
Stay ahead with streetwear-inspired looks that bring out your bold side.
For special moments, explore premium outfits that exude elegance.
Seasonal essentials keep you stylish all year round, no matter the occasion.
Every fabric is chosen with care, blending durability with modern trends.
We believe fashion should be effortless, versatile, and timeless.
Your style journey starts here – dress sharp, live bold, and stand out."</p>

 </div>

 </div>

 <br /><br />

 {/*Men shirt*/}

 <div className={styles.modelImg}>
  <img className={styles.styleImg} src={img1} alt="" />
  <img className={styles.styleImg} src={img2} alt="" />
  <img className={styles.styleImg} src={img3} alt="" />
  <img className={styles.styleImg} src={img4} alt="" />
  <img className={styles.styleImg} src={img5} alt="" />
  <img className={styles.styleImg} src={img6} alt="" />
  <img className={styles.styleImg} src={img7} alt="" />
  <img className={styles.styleImg} src={img8} alt="" />
  <img className={styles.styleImg} src={img9} alt="" />
  <img className={styles.styleImg} src={img10} alt="" />
  <img className={styles.styleImg} src={img11} alt="" />
  <img className={styles.styleImg} src={img12} alt="" />
 </div>

 <br /><br />

 <div>
  <div style={{fontFamily: "serif", margin: "20px"}}><h1>Men's Clothing</h1></div>
  <br />
  <div><p className={styles.modelPara}>"Check out all the freshest styles your closet needs in our men's clothing range. You'll find a roundup of everyday essentials, including tops and T-Shirts, as well as comfy lounge sets and underwear. Formal event coming up? Scroll no further than our men's blazers and suits for the sharpest looks and nail the dress code. When it comes to men's pants, there's chinos, joggers and cargo styles in all the staple colors. dreaming of denim? our men's jeans offer a range of fits to suit your style, including skinny, straight and tapered, to name just a few. Wear yours with a trendy oversized shirt or a classic denim number from our men's shirts edit. and when it comes to chilly weather, our men's jackets and coats have you covered – we've got puffer jackets and trench coats, as well as leather jackets and bomber jackets in year-round colors."</p></div>
 </div>

 <br /><br />



  <h1 style={{textAlign: "center", display: "flex", justifyContent: "center", textDecoration: "underline", fontFamily: "fantasy"}}>EXPLORE HOODIES</h1>
  <br />

<div className={styles.hoodieMain}>


  <div><img className={styles.hoodieImg} src={hood1} alt="" /></div>
  <div><img className={styles.hoodieImg}  src={hood2} alt="" /></div>
</div>
<br /><br />

<div style={{ display: "flex", justifyContent: "space-evenly", button: "20px", margin: "40px", textDecoration: "none"}}>
  <h2><a style={{textDecoration: "none", color: "black", }} href="">Shop Now</a></h2>
  <h2><a style={{textDecoration: "none", color: "black"}}  href="">Shop Now</a></h2>
</div>

<br /><br />



 <h1 style={{textAlign: "center", display: "flex", justifyContent: "center", textDecoration: "underline", fontFamily: "fantasy"}}>EXPLORE POLOS</h1>
  <br />

<div className={styles.hoodieMain}>


  <div><img className={styles.hoodieImg} src={polo1} alt="" /></div>
  <div><img className={styles.hoodieImg}  src={polo2} alt="" /></div>
</div>
<br /><br />

<div style={{ display: "flex", justifyContent: "space-evenly", button: "20px", margin: "40px", textDecoration: "none"}}>
  <h2><a style={{textDecoration: "none", color: "black", }} href="">Shop Now</a></h2>
  <h2><a style={{textDecoration: "none", color: "black"}}  href="">Shop Now</a></h2>
</div>

<br /><br />

<h1 style={{textAlign: "center", display: "flex", justifyContent: "center", textDecoration: "underline", fontFamily: "fantasy"}}>EXPLORE JEANS</h1>
  <br />

<div className={styles.hoodieMain}>


  <div><img className={styles.hoodieImg} src={jeans1} alt="" /></div>
  <div><img className={styles.hoodieImg}  src={jeans2} alt="" /></div>
</div>
<br /><br />

<div style={{ display: "flex", justifyContent: "space-evenly", button: "20px", margin: "40px", textDecoration: "none"}}>
  <h2><a style={{textDecoration: "none", color: "black", }} href="">Shop Now</a></h2>
  <h2><a style={{textDecoration: "none", color: "black"}}  href="">Shop Now</a></h2>
</div>
<>

 <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand Section */}
        <div className={styles.footerBrand}>
          <img src={logo} style={{width: "100px",
  height: "100px",
  borderRadius: "60px"}} alt="" />
  <br /><br />

          <h2> Brigitte Men’s Fashion Hub</h2>
          <p>Step into style — where comfort meets confidence.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerContact}>
          <h4>Contact Us</h4>
          <p>Email: brigitte@mensfashionhub.com</p>
          <p>Phone: +91 6474068507</p>
          <p>Location: Coimbatore, India</p>
        </div>

        {/* Social Links */}
        <div className={styles.footerSocial}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Brigitte Men’s Fashion Hub. All rights reserved.</p>
      </div>
    </footer>

    </>
   
    </>
  );
}

export default Home;