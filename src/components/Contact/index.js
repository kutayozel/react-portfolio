import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_k1v4dvp',
                'template_2n7gwlm',
                refForm.current,
                'b41GTwcq4txEehaXL'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, Please try again')
                }
            )
    }

    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray = {['C','o','n','t','a','c','t', ' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className="half">
                                    <input 
                                        type="email" 
                                        name='email' 
                                        placeholder='Email' 
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        placeholder='Subject' 
                                        type='text' 
                                        name='subject' 
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        placeholder='Message' 
                                        name="message" 
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Kutay Ozel,
                    <br />
                    Turkey,
                    <br />
                    Ankara <br />
                    <span>zelkutay@gmail.com</span>
                </div>
                <div className="map-wrap">
                </div>
            </div>
            <Loader type='ball-scale-ripple-multiple' />
        </>
    )
}

export default Contact