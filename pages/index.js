import React, {useEffect, useRef, useState} from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import SectionSeparator from '../components/section-separator'
import Stats from '../components/stats'
import Features from '../components/features'
import HeroReverse from '../components/hero-reverse'
import Pricing from '../components/pricing'
import Historia from '../components/historia'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'
import Gallery from '../components/gallery'
const BookingForm = dynamic(() => import("../components/BookingForm"))
import dynamic from 'next/dynamic'

const Home = (props) => {

    /* MY CODE */
    const [sidebar, setSidebar] = useState(false);

    const handleOnCloseSidebar = () => {
      setSidebar(false);
    }

    function handleClick(event) {
      console.log("handleClick Called");
      setSidebar(true);
    }

    const reservaRef = useRef([]);

    useEffect(() => {
      const elements = document.querySelectorAll('.reservar');
      reservaRef.current = elements;
      elements.forEach((element) => {
        element.addEventListener('click', handleClick);
      });

      return () => {
        reservaRef.current.forEach((element) => {
          element.removeEventListener('click', handleClick);
        });
      };
    }, []);

    // END MY CODE

  return (
    <>
      <div className="home-container">
        <Navbar></Navbar>
        <Hero rootClassName="hero-root-class-name"></Hero>
        <SectionSeparator rootClassName="section-separator-root-class-name"></SectionSeparator>
        <Stats rootClassName="stats-root-class-name"></Stats>
        <SectionSeparator rootClassName="section-separator-root-class-name1"></SectionSeparator>
        <Features></Features>
        <SectionSeparator rootClassName="section-separator-root-class-name2"></SectionSeparator>
        <HeroReverse></HeroReverse>
        <SectionSeparator rootClassName="section-separator-root-class-name3"></SectionSeparator>
        <Pricing rootClassName="pricing-root-class-name"></Pricing>
        <Historia></Historia>
        <SectionSeparator rootClassName="section-separator-root-class-name4"></SectionSeparator>
        <Testimonials></Testimonials>
        <SectionSeparator rootClassName="section-separator-root-class-name5"></SectionSeparator>
        <SectionSeparator></SectionSeparator>
        <Contact></Contact>
        <SectionSeparator></SectionSeparator>
        <Gallery></Gallery>
      {sidebar && <BookingForm sidebar={sidebar} onCloseSidebar={handleOnCloseSidebar}></BookingForm>}
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
