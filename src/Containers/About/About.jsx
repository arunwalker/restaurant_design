import React from 'react'

import { about, signature } from '../../assets'
import './About.css'

const About = () => {
  return (
    <div id="about" className='about-wrapper'>
        <div className='about-container'>
            <div className="about-content">
                <h2>Few words about myself</h2>
                <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</p>
                <div className='about-content-img'>
                    <img src={signature} alt="sign-img" />
                </div>
            </div>
            <div className="about-image">
                <img src={about} alt="about-img" />
            </div>
        </div>
    </div>
  )
}

export default About