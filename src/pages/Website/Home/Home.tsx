import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./Home.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { BsStarFill } from "react-icons/bs";
import { Container, Form, Col, Row } from "react-bootstrap";
import { appStore, card1, card2, card3, card4, coffeeShop1, coworking, googlePlay, location, logoNotchMobile, moon, nextIcon, previousIcon, slVector, star, star2 } from "../../../assets/images";
import { Blog, CoffeeShop } from "../../../components/Website";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowRight } from "react-icons/fa";
import { fadeIn } from 'react-animations'
import { IoIosArrowBack } from "react-icons/io";


const Home = (props: any) => {
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const options = {
    loop: true,
    items: 4,
    dots: false,
    nav:true,
    navText:[`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>`,`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>`],
    autoplay: false,
    responsive : {
        0 : {
          items: 1,
        },
        480 : {
          items: 1,
        },
        768 : {
          items: 3,
        },
        992 : {
          items: 4,
        }
    }
  };
  const options2 = {
    loop: true,
    items: 3,
    dots: false,
    nav:false,
    autoplay: true,
    autoplayHoverPause:true,
    responsive : {
        0 : {
          items: 1,
        },
        480 : {
          items: 1,
        },
        768 : {
          items: 3,
        }
    }
  };

  return (
    <>
    <div className={`${cx.spaceBox}`}>
      <section className={`${cx.bannerSection}`}>
        <div className={`${cx.shapeTouch}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 170"><path fill="#fefcfc" id="startp" d="M41.40094,132.5l-.04614,.04163c-21.13678,.79645-38.35895,16.84418-40.99341,37.45837h-.36139V0H270c-24.40985,1.70758-43.93091,21.74066-45.83258,46.09766l-.16742,36.40234c0,27.61426-22.38574,50-50,50H41.40094Z" data-original="M0,0H0V0Z"></path></svg>
        </div>
        <Container>
          <Row className="align-items-end">
            <Col md={7} lg={7} xl={7} xxl={7}>
              <div className={`${cx.contentBox}`}>
                 <h1 className={`${cx.slTitle} wow fadeInUp`}>discover your <br />next work spot<br /> at cafes near you</h1>
                 <p className=" wow fadeInUp">Sync is a free platform that shows coffee shops<br /> near you that are totally remote work-friendly.<br />  Did we mention you can also see which cafes<br />  your friends are working from?</p>
                 <NavLink className={`btn ${st.btn1} wow fadeInUp`} to="/cafe-listing">Start searching now</NavLink>
                 {/* <ul className={`${cx.downloads} wow slideInLeft`}>
                  <li><NavLink to="#" title="App Store"><img src={appStore}/></NavLink></li>
                  <li><NavLink to="#" title="Google Play"><img src={googlePlay}/></NavLink></li>
                 </ul> */}
              </div>
            </Col>
          </Row>
        </Container>
        <div className={`${cx.imgBox}`}>
          <img src={slVector} />
        </div>
      </section>
    </div>
      <section className={`${cx.featuredSection} ${st.sectionPadding}`}>
        <Container>
          <Col lg={12} className={`${st.title} text-center`}>
            <h2 className={`${st.heading} wow fadeInUp`}>featured <br />coffee shops
              <span>Our top picks!</span>
            </h2>
          </Col>
          <OwlCarousel className='owl-theme' {...options}>
            <div className='item wow fadeInUp'><CoffeeShop status="inactive" /></div>
            <div className='item wow fadeInUp'><CoffeeShop status="inactive" /></div>
            <div className='item wow fadeInUp'><CoffeeShop status="inactive" /></div>
            <div className='item wow fadeInUp'><CoffeeShop status="inactive" /></div>
            <div className='item wow fadeInUp'><CoffeeShop status="inactive" /></div>
          </OwlCarousel>

          <Col lg={12} className={`text-center mt-4 wow fadeInUp`}>
             <NavLink to="/cafe-listing" className={`btn ${st.btn2}`}>See more cafes</NavLink>
          </Col>
        </Container>
      </section>

      <section className={`${cx.workSpaceSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Col lg={12} className={`${st.title} ${cx.title2} text-left`}>
            <h2 className={`${st.heading} wow fadeInUp`}><div style={{ position:'relative', zIndex:'1' }}>say bye to boredom,<br/> and hello to cafe<br/> workspaces!</div>
            <img src={moon} className={`${cx.moon}`} />
            <img src={star} className={`${cx.star}`} />
            </h2>
          </Col>
          <Row className={`${cx.sliderRow}`}>
          <OwlCarousel className='owl-theme' {...options2}>
            <div className='item wow fadeInUp'>
              <div className={`${cx.spaceCard}`}>
                <img src={card1} />
                <p>Filter your coffee shop search to find the perfect work spot for your needs. </p>
              </div>
            </div>
            <div className='item wow fadeInUp'>
              <div className={`${cx.spaceCard}`}>
                <img src={card2} />
                <p>Mark your personal map with your fave cafes and impress your connections with your coffee cred. </p>
              </div>
            </div>
            <div className='item wow fadeInUp'>
              <div className={`${cx.spaceCard}`}>
                <img src={card3} />
                <p>Join forces with friends and colleagues to find your next coworking oasis.  </p>
              </div>
            </div>
            <div className='item wow fadeInUp'>
              <div className={`${cx.spaceCard}`}>
                <img src={card4} />
                <p>See which coffee shops your connections like to work from.   </p>
              </div>
            </div>
          </OwlCarousel>
          </Row>
        </Container>
      </section>
      
      <section className={`${cx.featuredSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Col lg={12} className={`${st.title} text-center wow fadeInUp`}>
            <h2 className={`${st.heading}`}>check out our  <br />trending cafes
              <span style={{ backgroundColor:'#CEDCF4', color:'#3B5A8E' }}>The hottest hangouts</span>
            </h2>

          </Col>
          <Row>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><CoffeeShop status="inactive" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><CoffeeShop status="inactive" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><CoffeeShop status="inactive" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><CoffeeShop status="inactive" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><CoffeeShop status="inactive" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><CoffeeShop status="inactive" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><CoffeeShop status="inactive" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><CoffeeShop status="inactive" /></Col>
          </Row>

          <Col lg={12} className={`text-center mt-4 wow fadeInUp`}>
             <NavLink to="/cafe-listing" className={`btn ${st.btn2}`}>Check out all the cafes</NavLink>
          </Col>
        </Container>
      </section>
      
      <section className={`${cx.cardSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Row>
            <Col md={6} lg={6} xl={6} xxl={6}>
              <div className={`${cx.cardBox} wow fadeInUp`}>
                
                <img src={coworking} className={`${cx.icon}`} />
                  <h5>join the coworking <br />craze and list your<br /> cafe on Sync!</h5>
                
                  <div className={`${cx.overlay}`}>
                    <NavLink to="#" className={`${cx.nextBtn}`}>
                      <FaArrowRight />
                    </NavLink>
                    <svg className={`${cx.bgShape}`} width="91" height="89" viewBox="0 0 91 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.499915C0.413197 0.489838 0.852842 0.489388 1.31458 0.499915H89.5C90 35.1666 90.7 100.8 89.5 86C88.3 71.2 73 67.8333 65.5 68C59.3333 67.6667 44.8 67.2 36 68C27.2 68.8 24.3333 62.3333 24 59V50C24.1667 42.6666 24.1 25.1999 22.5 13.9999C20.9967 3.47716 8.48891 0.663489 1.31458 0.499915H0Z" fill="white"/>
                    </svg>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} xl={6} xxl={6}>
              <div className={`${cx.cardBox} ${cx.cardBox2} wow fadeInUp`}>
                
                <img src={star2} className={`${cx.icon}`} />
                  <h5>meet the people  <br />behind the platform</h5>
                
                  <div className={`${cx.overlay}`}>
                    <NavLink to="#" className={`${cx.nextBtn}`}>
                      <FaArrowRight />
                    </NavLink>
                    <svg className={`${cx.bgShape}`} width="91" height="89" viewBox="0 0 91 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.499915C0.413197 0.489838 0.852842 0.489388 1.31458 0.499915H89.5C90 35.1666 90.7 100.8 89.5 86C88.3 71.2 73 67.8333 65.5 68C59.3333 67.6667 44.8 67.2 36 68C27.2 68.8 24.3333 62.3333 24 59V50C24.1667 42.6666 24.1 25.1999 22.5 13.9999C20.9967 3.47716 8.48891 0.663489 1.31458 0.499915H0Z" fill="white"/>
                    </svg>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      
      <section className={`${cx.featuredSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Col lg={12} className={`${st.title} text-center`}>
            <h2 className={`${st.heading} wow fadeInUp`}>read up on our  <br />latest articles
              <span style={{ backgroundColor:'#D2BCF4', color:'#8A4AED' }}>The buzzzz</span>
            </h2>

          </Col>
          <Row>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3} className="wow fadeInUp"><Blog /></Col>
          </Row>

          <Col lg={12} className={`text-center mt-4`}>
             <NavLink to="/blog" className={`btn ${st.btn2} wow fadeInUp`}>See all articles</NavLink>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default Home;
