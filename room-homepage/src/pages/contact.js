import * as React from 'react'
import { graphql } from "gatsby"

import Header from '../components/header'
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import '../components/textbox.scss'

const ContactPage = ({ data }) => {
  return (
    <main>
      <title>Kontakt</title>
      <Header />
      <article>
        <Container fluid>
          <Row>
            <Col xs={12} md={12} className="p-0">
                <Img fluid={data.image01.childImageSharp.fluid} style={{ height: "350px" }} imgStyle={{objectPosition: "top left"}}/>
            </Col>
          </Row>
        </Container>
        
        <Container>
          <Row>
            <Col xs={12} md={12} className="p-0">
                <div className="textbox">
                  <h1 className="text-center">Contact</h1>
                </div>
            </Col>
          </Row>
        </Container>
       
      </article>
    </main>
  )
}

export default ContactPage

export const query = graphql`
  query {
    image01: file(relativePath: {eq: "desktop-image-hero-3.jpg"}) {
      id
      childImageSharp {
        fluid( maxWidth: 850, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`