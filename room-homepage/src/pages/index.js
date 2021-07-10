import * as React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { Link } from 'gatsby'
import Slider from "react-slick";

import NextArrow from "../assets/icon-angle-right.svg"
import PrevArrow from "../assets/icon-angle-left.svg"
import Arrow from "../assets/icon-arrow.svg"

import '../components/textbox.scss'
import '../scss/slick.scss'


// markup
const IndexPage = ({ data }) => {

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <main>
      <title>room</title>
      <Header />
      <article>
        <Container fluid className="p-0">
          <Slider {...settings}>
            <Row>
              <Col xs={12} md={6} className="p-0">
                <Img fluid={data.image01.childImageSharp.fluid} />
              </Col>
              <Col xs={12} md={6} className="p-0">
                <div className="textbox">
                  <h1>Discover innovative ways to decorate</h1>
                  <p>
                    We provide unmatched quality, comfort, and style for property owners across the country.
                    Our experts combine form and function bringing your vision to life. Create a room in your
                    own style with our collection and make your property a reflection of you and what you love.
                  </p>
                  <Link className="link-btn" to="/shop">Shop Now <Arrow /></Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} className="p-0">
                <Img fluid={data.image02.childImageSharp.fluid} />
              </Col>
              <Col xs={12} md={6} className="p-0">
                <div className="textbox">
                  <h1>We are available all across the globe</h1>
                  <p>
                    With stores all over the world, is's easy for you to find furniture for your home or place of
                    business. Locally, we're in most major cities throughout the country. Find the branch nearest
                    you using our store locator. Any questions? Don't hestitate to contact us today.
                  </p>
                  <Link className="link-btn" to="/shop">Shop Now <Arrow /></Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} className="p-0">
                <Img fluid={data.image03.childImageSharp.fluid} />
              </Col>
              <Col xs={12} md={6} className="p-0">
                <div className="textbox">
                  <h1>Manufacturted with the best materials</h1>
                  <p>
                    Our modern furniture store provide a high level of quality. Our company has invested in advanced
                    technology to ensure that every product is made as perfect and as consistent as possible. With
                    three decades of experience in this industry, we understand what customers want for their home and office.
                  </p>
                  <Link className="link-btn" to="/shop">Shop Now <Arrow /></Link>
                </div>
              </Col>
            </Row>
          </Slider>
          <Row>
            <Col xs={12} md={3} className="p-0">
              <Img fluid={data.image04.childImageSharp.fluid} />
            </Col>
            <Col xs={12} md={6} className="p-0">
              <div className="textbox">
                <h3>About our furniture</h3>
                <p>
                  Out multifunctional collection blends design and function to suit your individual taste. Make each
                  room unique, or pick a cohesive theme that best express your interests and what inspires you.
                  Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
                  Product specialists are available to help create your dream space.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3} className="p-0">
              <Img fluid={data.image05.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </article>
    </main >
  )
}

export default IndexPage

export const query = graphql`
  query {
    image01: file(relativePath: {eq: "desktop-image-hero-1.jpg"}) {
      id
      childImageSharp {
        fluid( maxWidth: 850, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image02: file(relativePath: {eq: "desktop-image-hero-2.jpg"}) {
      id
      childImageSharp {
        fluid( maxWidth: 850, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image03: file(relativePath: {eq: "desktop-image-hero-3.jpg"}) {
      id
      childImageSharp {
        fluid( maxWidth: 850, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image04: file(relativePath: {eq: "image-about-dark.jpg"}) {
      id
      childImageSharp {
        fluid( maxWidth: 850, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image05: file(relativePath: {eq: "image-about-light.jpg"}) {
      id
      childImageSharp {
        fluid( maxWidth: 850, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`