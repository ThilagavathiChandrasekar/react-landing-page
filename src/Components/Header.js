import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../Components/assests/slide1.jpg';
import slide2 from '../Components/assests/slide2.jpg';
import slide3 from '../Components/assests/slide3.jpg';
import briyani from '../Components/assests/briyani.jpg';
import chicken65 from '../Components/assests/chicken65.jpg';
import dosa from '../Components/assests/dosa.jpg';
import idly from '../Components/assests/idly.jpg';
import meal from '../Components/assests/meal.jpg';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Header() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
     {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Food App</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#menu">Menu</Nav.Link>
                  <Nav.Link href="#form">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

<div id='home'>
        <div className='slide'>
        <Carousel>
      <Carousel.Item>
         <img
          className="d-50 w-100 slide-img"
          src={slide1}
          alt="First slide"
          height="550"
          width="100"
        />
        <Carousel.Caption>
          <h3 className='slide-content'>Enjoy your delicious meal</h3>
          <p className='slide-content'>Restoran is a restaurant, bar and coffee roasterylocated on italy <br /> We have awesome recipes and the most talented chefs in town!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
          className="d-50 w-100 slide-img"
          src={slide2}
          alt="First slide"
          height="550"
          width="100"
        />
        <Carousel.Caption>
          <h3 className='slide-content'>Enjoy your delicious meal</h3>
          <p className='slide-content'>Restoran is a restaurant, bar and coffee roasterylocated on italy <br /> We have awesome recipes and the most talented chefs in town!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
          className="d-50 w-100 slide-img"
          src={slide3}
          alt="First slide"
          height="550"
          width="100"

        />
        <Carousel.Caption>
          <h3 className='slide-content'>Enjoy your delicious meal</h3>
          <p className='slide-content'>
            Restoran is a restaurant, bar and coffee roasterylocated on italy <br /> We have awesome recipes and the most talented chefs in town!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
</div>

      <div className='cards' id='about'>
      <Card style={{ width: '18rem' }} className='card'>
      <Card.Body>
        <Card.Title>Master Chef</Card.Title>
        <Card.Text>
        Also known as a head chef or a master chef, an executive chef is the overall kitchen boss. This position is the pinnacle of any chef career.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Body>
        <Card.Title>Quality Food</Card.Title>
        <Card.Text>
         Providing a high-quality dining experience can set your hotel apart from the competition, boost revenue, and create loyal customers who will return again and again
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Body>
        <Card.Title>Online order</Card.Title>
        <Card.Text>
            An online food ordering system allows your business to accept and manage orders placed online for delivery or takeaway
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}} className='card'>
      <Card.Body>
        <Card.Title>24/7 Service</Card.Title>
        <Card.Text>
        24 hours a day, seven days a week: all the time: We're open for business 24/7.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>

      <div className='items container' id='menu'>
         <h1> <center style={{color:'blue'}} >Food menu</center></h1>
         <h3> <center>Most popular items</center> </h3>
        <div className='food-items'>
            <div className='item1'>
              <img src={briyani} className='item-img' />
              <p className='item-para'> delicious food</p>
            </div>
            <div className='item2'>
              <img src={chicken65} className='item-img' />
              <p className='item-para'> delicious food</p>
            </div>
          </div>
          <div className='food-items'>
            <div className='item3'>
              <img src={dosa} className='item-img'/>
              <p className='item-para'> delicious food</p>
            </div>
            <div className='item4'>
              <img src={idly} className='item-img' />
              <p className='item-para'> delicious food</p>
            </div>
          </div>
          <div className='food-items'>
            <div className='item5'>
              <img src={meal} className='item-img'/>
              <p className='item-para'> delicious food</p>
            </div>
            <div className='item6'>
              <img src={briyani} className='item-img' />
              <p className='item-para'> delicious food</p>
            </div>
        </div>
      </div>
      <div id='footer'>
              <p>&copy; 2023 Food App</p>
              <p>email: footapp@gmail.com</p>
      </div>
    </>
  );
}

export default Header;