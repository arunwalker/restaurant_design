import React from 'react'
import { Link } from 'react-router-dom';

import { contactImage } from '../../assets'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div id="contact" className="contact-wrapper">
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-form">
                    <div class="row g-2">
                     <h2>Make an Order!</h2>
                        <div class="col-md">
                            <div class="form-floating">
                            <input type="email" class="form-control" id="e-mail" placeholder='E-mail address'  />
                            <label for="e-mail">Email address</label>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="form-floating">
                            <input type='text' class='form-control' id='name' placeholder='Name'  />
                            <label for="name">Name</label>
                            </div>
                        </div>
                    </div>
                    <div className='form-floating'>
                        <input type='text' class='form-control' id='address' placeholder="Address" />
                        <label for="address">Address</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100}}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                        <Link to="/success">
                            <button type='button' className='form-button'>Submit</button>
                        </Link>
                </div>
                <div className="contact-image">
                    <img src={contactImage} alt='contact-img' />
                </div>
            </div>
        </div>
    </div>

    <div className='footer'>
        <p>Footer</p>
    </div>
    </>
  )
}

export default Contact