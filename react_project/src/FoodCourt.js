// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Carousel from "react-bootstrap/Carousel";
// import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Carousel,
  Form,
  Button,
} from "react-bootstrap";

function FoodCourt() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="Sale.jpg/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          /> */}
          <img src="Sale.jpg" alt="First slide" width="1250" height="350" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>SALE ongoing on your favourite top brands.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="Eighty.jpg" alt="Second slide" width="1250" height="350" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Eighty percent off on top brands.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="Seventy.jpg/800x400?text=First slide&bg=373940"
            alt="First slide"
          /> */}
          <img src="Seventy.jpg" alt="Third slide" width="1250" height="350" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Seventy percent off on top brands.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="Sixty.jpg/800x400?text=First slide&bg=373940"
            alt="First slide"
          /> */}
          <img src="Sixty.jpg" alt="First slide" width="1250" height="350" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Sixty percent off on top brands.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default FoodCourt;
