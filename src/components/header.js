import React from 'react'
import { Link } from 'gatsby'
import './header.css'
import SvgLogo from './svg';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState ({hasScrolled: true})
    } else {
      this.setState ({hasScrolled: false})
    }
  }

  render () {
    return (
      <div className={this.state.hasScrolled ?
      'Header HeaderScrolled' : 'Header'}>  
    <div className="Nav">
    {/* <Link to="/"><img src={require('../images/Head-On-Logo-FNL-2-05.png')}width="180"/></Link> */}
    <Link to="/"><SvgLogo></SvgLogo></Link>
    <Link to="/projects">SHOWCASE</Link>
    <Link to="/">CLIENTS</Link>
    <Link to="/what-we-do">WHAT WE DO</Link>
    <Link to="/blog">FEEDING THE BEAST</Link>
    <Link to="/about">US</Link>
    <Link to="/contact">GET IN TOUCH</Link>
    </div>
  </div>
    )
  }
}

export default Header
