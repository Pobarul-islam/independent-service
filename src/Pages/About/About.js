import React from 'react';
import './About.css';
import pic from '../../images/mypic.png'

const About = () => {
    return (
        <div>
            <h3 className='text-center'>This is About Pages:</h3>

            <div className='About-me'>
                <div>
                    
                    <p> <img className='my-pic' src={pic} alt="" /></p>
                </div>
                
                <div>
                    <h2 className='text-center text-primary'>Md Pobarul islam</h2>
                    <p className='mt-5'>I have just over a year of experience as a junior software engineer with First <br />
                        Technology. In my short time there, I've already contributed to over a dozen <br />
                        projects and assisted with managing one project for one of the firm's <br />
                        long-time clients.
                        <br /> <br />
                        “Prior to this role, I completed a two-year internship with Mobile First, <br />
                        where I honed my mobile app development skills. Ideally, I would like to <br />
                        continue to specialize in mobile software engineering, an area where I know  <br />
                        your firm excels.</p>
                </div>
            </div>



        </div>
    );
};

export default About;