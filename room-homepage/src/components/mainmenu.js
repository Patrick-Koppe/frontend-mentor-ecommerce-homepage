import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import "./mainmenu.scss"

const { useState } = React;


const MainMenu = () => {

  const [open, setOpen] = useState(true);

  const clickHandler = () => {
    setOpen(!open);
  };

  const breakpoints = useBreakpoint();

  return (
    <header className={`${breakpoints.md ? 'mobile' : 'desktop'}${(open ? '' : ' mm-open')}`}>
      <Container>
        <Row>
          <Col xs={12}>
            <nav className="mainmenu">
              <li className="burger-btn"><button onClick={clickHandler}>{open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}</button></li>
              <li className="logo me-md-3"><h2 className="h6">room</h2></li>
              <li>
                <div className="extended-list">
                  <ul className="m-0 p-0">
                    <li className="mx-3"><Link to="/">Home</Link></li>
                    <li className="mx-3"><Link to="/shop">Shop</Link></li>
                    <li className="mx-3"><Link to="/about">Über uns</Link></li>
                    <li className="mx-3"><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </li>
            </nav>
          </Col>
        </Row>
      </Container >
    </header>
  )

}

export default MainMenu