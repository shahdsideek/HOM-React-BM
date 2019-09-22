import React from 'react'
import Header from '../components/header';
import GoogleMap from '../components/google-maps';


export default function Contact () {
  
    return (
        <div>
        <Header />
        <section className="get-in-touch">
        <h1> Get in touch</h1>
        <div className="get-in-touch-text">
        <p>Want to have a chat? We’d ♥ to hear from you.<br />

            37 Grosvenor St,
            Abbotsford, VIC 3067<br />

            contact@headonmedia.com<br />

            +61 407 059 383</p>

        </div>
        </section>
        <div>
        <section className="google-map">
        <GoogleMap />
        </section>

        </div>



        <section className="form-hero-group">
                <form className="form"  >
                {/* Name */ }
                    <div className="form-group">
                        <p>Full Name *</p>
                        <label className="form-group-label" htmlFor="name"></label>
                        <input type="text" className="form-group-input" name="name" id="name" required/>
                        <div className="form-group-line"></div>
                    </div>
                    {/* Email */ }
                    <div className="form-group">
                    <p>Email Address *</p>
                        <label className="form-group-label" htmlFor="email"></label>
                        <input type="text" className="form-group-input" name="email" id="email" required/>
                        <div className="form-group-line"></div>
                    </div>
                    {/* Subject */ }
                    <div className="form-group">
                    <p>Subject *</p>
                        <label className="form-group-label" htmlFor="subject"></label>
                        <input type="text" className="form-group-input" name="subject" id="subject" required/>
                         <div className="form-group-line"></div>
                    </div>
                    {/* Description */ } 
                    <div className="form-group">
                    <p>Message *</p>
                    <label className="form-group-label" htmlFor="description"></label>
                    <textarea name="description" id="description" className="form-group-input-message" rows="7" required/>
                    <div className="form-group-line"></div>
                     </div>
                    {/* Submit button */ }
                    <button type="submit">Submit</button>
                </form>
        </section>
        </div>
    )
}