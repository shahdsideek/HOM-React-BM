import React from 'react'
import { Link } from 'gatsby'
import vdbackground from '../images/HEAD-On-SITE.mp4';
import Header from '../components/header'
import Card from '../components/card';
//import styled from 'styled-components'


// const SectionCaption = styled.p `
//   font-weight: 600;
//   font-size: 18px;
//   text-transfrom: uppercase;
//   color: #94A4BA;
//   text-align: center;
// `
// const SectionCellGroup = styled.div`
//   max-width: 800px;
//   margin: 0 auto 100px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-column-gap: 20px;
//   padding: 0 20px;

//   @media (max-width: 800px) {
//     grid-template-columns: repeat(1,1fr);

//   }
// `


const IndexPage = () => (
  <div>
    <Header/>
    <div className="Hero">
    <video className='videoTag' autoPlay loop muted>
    <source src={vdbackground} type='video/mp4' />
    </video>
      <div className="HeroGroup">
    <h1>FEED THE CONTENT BEAST</h1>
    </div>
    </div>
    <div className="Cards">
    <div>
    <h2>Checkout What We've Done</h2>
    </div>
    <div className="CardGroup">
    <Link to="/contrology" className="linkTo">
    <Card
      title="Contrology"
      image={require('../images/contrology-pink.jpeg')} />
      </Link>
      <Link to="/diida" className="linkTo"> 
      <Card 
      title="Diida"
      image={require('../images/dida-thumbnail.jpg')} />
      </Link>
      <Card 
      title="KX RETREATS"
      image={require('../images/kxRetreats-thumbnail.jpg')} />
      <Card 
      title="EXS + OHS"
      image={require('../images/ExsOhs.jpg')} color="black" />
    </div>
    </div>
    
    
  </div>
)

export default IndexPage
