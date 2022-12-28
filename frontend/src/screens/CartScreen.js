import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return ( 

    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol size="12">
        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
          <MDBCardBody className="p-0">
            <MDBRow className="g-0">
            
              <MDBCol lg="8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                      Shopping Cart
                    </MDBTypography>
                  </div>

                  {cartItems.length === 0 ? (
                    <Message>
                     Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                  ) : (   
                  <ListGroup variant='flush'>
                    {cartItems.map((item) => (
                      <ListGroup.Item key={item.product}>
                        <Row>

                          <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded />
                          </Col>

                          <Col md={3}>
                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                          </Col>

                          <Col md={2}>${item.price}</Col>

                          <Col md={2}>
                            <Form.Control
                              as='select'
                              value={item.qty}
                              onChange={(e) =>dispatch(
                                addToCart(item.product, Number(e.target.value)))}>
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>{x + 1}
                                </option>
                                ))}
                              </Form.Control>
                          </Col>
                          <Col md={2}>
                            <Button
                              type='button'
                              variant='light'
                              onClick={() => removeFromCartHandler(item.product)}>
                              <i className='fas fa-trash'></i>
                            </Button>
                          </Col>
                          </Row>
                        </ListGroup.Item>))}
                      </ListGroup>)}
                  <hr className="my-4" />
                  <div className="pt-5">   
                  </div>
                </div>
              </MDBCol>
              <MDBCol lg="4" className="bg-grey">
                <ListGroup.Item>
                  <h2>
                    ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h2>
                  ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block'
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}>
                    Go to order
                  </Button>
                </ListGroup.Item>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CartScreen
