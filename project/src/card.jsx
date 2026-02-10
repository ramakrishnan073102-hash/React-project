import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './card.module.css'
import img1 from './assets/img/collectionshirt.jpg'
import img2 from './assets/img/collectionT-shirt.jpg'
import img3 from './assets/img/collectionPolo.jpg'
import img4 from './assets/img/collectionJeans.jpg'



function BasicExample() {
  return (
    <>
    <div className={styles.collectioncard}>
   
    <Card  style={{ width: '18rem'}}>
     <img style={{height: "250px"}} src={img1} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className={styles.collectionbtn} >Buy Now</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <img style={{height: "250px"}}  src={img2} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className={styles.collectionbtn} >Buy Now</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <img style={{height: "250px"}}  src={img3} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         <Button className={styles.collectionbtn} >Buy Now</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
       <img style={{height: "250px"}}  src={img4} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className={styles.collectionbtn} >Buy Now</Button>
      </Card.Body>
    </Card>
 </div>
    </>
  );
}

export default BasicExample;