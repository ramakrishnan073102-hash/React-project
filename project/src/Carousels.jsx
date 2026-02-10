import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/img/carousels1.jpg';
import img2 from './assets/img/carousels2.jpg';
import img3 from './assets/img/carousels3.jpg';
import styles from './Carousels.module.css'


function UncontrolledExample() {
  return (

     <>
    <Carousel className={styles.Carousel}>
      <Carousel.Item>
       <img src={img1} alt="" />
        <Carousel.Caption className={styles.Caption}>
          <h2>Step Into His Style</h2>
          <h4>Sneakers for Men • Buy 1 Get 1 Half Price</h4>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={img2} alt="" />
        <Carousel.Caption className={styles.Caption}>
          <h1>Casual T-Shirts • Flat 40% Off – Everyday Comfort, Everyday Style</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" />
       <Carousel.Caption className={styles.Caption}>
          <h1>Denim Jeans • Starting from ₹999 – Rugged Looks for Modern Men</h1>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<br /><br /><br />
   
 <h1 style={{textAlign: "center", fontFamily: "serif"}}>COLLECTIONS</h1>

 <br /><br /><br />
    </>
  );
}

export default UncontrolledExample;