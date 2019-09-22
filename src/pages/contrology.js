import React from 'react'
//import { Link } from 'gatsby'

//import Layout from '../components/layout'
import Header from '../components/header'
import Card from '../components/card';
//import styled from 'styled-components'
import '../components/project.css'
import Module from '../components/module';
import BannerImg from '../components/banner-img';






const contrologyPage = () => (
  <div>
    <Header/>
    <BannerImg
    title="CONTROLOGY"
    image={require('../images/contrology-pink.jpeg')} />
    <div className="projectOverview">
    <h2>Client<br /> -<br /> Contrology Active</h2>
    <h2>Services<br /> -<br />  Product, Phottography, Website</h2>
    <h2>Proof<br /> -<br /> Website.com</h2>
    </div>
    <div className="largeImage">      
    </div>
    <div className="quote">
        <h1>"Head on and the team are the best" <br />-Client</h1>
    </div>

    <div className="four-image-grid">
    <Card
      image={require('../images/contrology-pink.jpeg')} />
      <Card 
      image={require('../images/dida-thumbnail.jpg')} />
      <Card 
      image={require('../images/kxRetreats-thumbnail.jpg')} />
      <Card 
      image={require('../images/ExsOhs.jpg')} />
    </div>

    <div className="modules">
    <Module
      title="800,000+ INFLUENCER REACH"  
      />
      <Module 
      image={require('../images/dida-thumbnail.jpg')} />
      <Module 
      image={require('../images/contrology-floor.jpg')} />
      <Module 
      title="objective."
      text="After a very successful AW16 campaign featuring Sam Harris we were ready to take it up a notch with the Spring/Summer Jo Mercer campaign!" />
      <Module 
      title="solution." 
      text="After a very successful AW16 campaign featuring Sam Harris we were ready to take it up a notch with the Spring/Summer Jo Mercer campaign!"   
      />
      <Module 
      image={require('../images/croftBoot.jpg')} />
      <Module 
      image={require('../images/croft-grass.jpg')} />
      <Module 
      title="results." 
      text="After a very successful AW16 campaign featuring Sam Harris we were ready to take it up a notch with the Spring/Summer Jo Mercer campaign!"   
      />


    </div>
    
    
    {/* <SectionCaption>12 Sections - 6 hours</SectionCaption>
    <SectionCellGroup>{staticdata.cells.map(cell => (
      <Cell 
      title={cell.title}
      // image={cell.image} 
      />
    ))}
    </SectionCellGroup> */}

    
  </div>
)

export default contrologyPage
