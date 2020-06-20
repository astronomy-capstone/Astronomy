import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


export function NavBar() {
  return(
    <>
      <Container>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Astronomy</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#media">Media</Nav.Link>
          <Nav.Link href="#glossary">Glossary</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
        </Nav>
      </Navbar>
      </Container>
    </>
  )}
