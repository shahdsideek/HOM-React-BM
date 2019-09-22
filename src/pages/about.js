import React from 'react'
import styled from 'styled-components'
import Header from '../components/header';
import aboutUsImage from '../images/aboutUS.jpg';


//CSS Styling
const TextSection = styled.p `
  font-size: 25px;
  padding: 150px 50px 0;
  line-height: 2.6em;
  text-align: center;
  font-style:normal;
  color: #454545;
  font-weight:300;
`

const HungryBeast = styled.p `
  font-size: 27px;
  padding: -10px 50px;
  line-height: 1.6em;
  text-align: center;
  font-style:normal;
  color: #454545;
  font-weight:600;
`

const CheckoutInsta = styled.p `
  font-size: 15px;
  padding: 0px 50px 0;
  line-height: 2.6em;
  text-align: center;
  font-style:normal;
  color: #454545;
  font-weight:300;
`


export default function About () {
    return ( 
        <div>
         <Header />
         <section>
            <TextSection id="textSection">
            <p>
            Head On is an agency offering strategic<br />
            creative direction, full service production,<br />
            distribution and data analytics across<br />
            owned, paid and earned media.<br />
            And we’re damn good at it.<br />
            </p>
            </TextSection>
            <HungryBeast>
            <p>
            The Content Beast is always hungry, and<br />
            we’re here to feed it.<br />
            </p>
            <img src={aboutUsImage} alt="about-us" />
            </HungryBeast>
            <CheckoutInsta>
            <p>
            We creatively reach the audiences of our clients with content they love ♥<br />

            Head On also has an internal photographic/production studio and video editing suite on site.<br />

            Check out our Instagram below!<br /> 

            @Headonmedia
            </p>
           </CheckoutInsta>
           </section>
        </div>
    )
}