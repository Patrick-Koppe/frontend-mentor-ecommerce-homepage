import * as React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import MainMenu from './mainmenu'
import "./header.scss"


const { useState } = React;

const Header = () => {

  const breakpoints = useBreakpoint();

  const [open, setOpen] = useState(true);

  const handleMenuClick = (open) => {
    setOpen(!open);
  }

  return (
    <header className={`${breakpoints.md ? 'mobile' : 'desktop'}${(open ? '' : ' mm-open')}`}>
      <Container>
        <Row>
          <Col xs={12}>
            <MainMenu open={open} onMenuClick={handleMenuClick} />
          </Col>
        </Row>
      </Container >
    </header>
  )
}

export default Header