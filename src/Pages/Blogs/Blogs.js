import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center text-primary'>This is Questions Page</h2>

            <div className='w-50 mx-auto mt-5'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Defference between authorization and authentication ?</Accordion.Header>
                        <Accordion.Body>
                            <p>Basically, confirmation is the method involved with checking what someone's identity is,
                                though approval is the most common way of confirming what explicit applications, documents,
                                and information a client approaches. The circumstance is like
                                that of an aircraft that necessities to figure out which individuals can come ready</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase ? what other options do you have implement authentication ?</Accordion.Header>
                        <Accordion.Body>
                            Firebase by Google can be utilized for the accompanying: Firebase deals with
                            all information constant in the data set. Thus, the trading of information
                            forward and backward from the data set is simple and speedy. Henceforth, in the
                           
                            5 Common Authentication Types
                           1. Secret key based verification. Passwords are the most widely recognized strategies for confirmation.
                           2. Multifaceted validation.
                           3. Endorsement based verification.
                           4. Biometric validation.
                           5. Token-based validation.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What other services does firebase provide other than authentication ?</Accordion.Header>
                        <Accordion.Body>
                            To utilize the Firebase Storage we really want to validate a client by means
                            of Firebase verification. The default security rules expect clients to be
                            verified. Firebase Storage is essentially a strong and
                            basic item stockpiling, in which you can store your records without any problem.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>


        </div>
    );
};

export default Blogs;