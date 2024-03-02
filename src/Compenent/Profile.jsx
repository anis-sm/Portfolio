import React, { useEffect } from 'react';
import '../App.css';
import profile from "../assets/Profile.jpg";
import Typed from 'typed.js'; 
import logo from "../assets/logo.png"

const Profile = () => {
    useEffect(() => {
        var typed = new Typed('.element', {
            strings: ['Atomic Code Founder', 'Front-end Developer', 'Computer Science Student'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy(); 
        };
    }, []); 

    return (
        <section className='Profile'id="home">
        <div className="Profile_element" >
            <div className="my_info">
                <h3>Hello, It's Me</h3>
                <h1>Smira Anis</h1>
                <h3>And I'm a <span className="element"></span></h3>
                <p>I'm a web developer with a computer science license,<br/>
                a member of the Atomic Code development team, and a Blockchain researcher.
                </p>
                <button id='cv'>Download CV</button>
                <div className='social-links'>
                    <a href='https://www.instagram.com/anis__sm/'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://web.facebook.com/anis.smira25'><i class="fa-brands fa-facebook-f"></i></a>
                    <a href='https://github.com/anis-sm'><i class="fa-brands fa-github"></i></a>
                    <a href='https://t.me/anis_sm25'><i class="fa-brands fa-telegram"></i></a>
                    <a href='https://twitter.com/SmiraAnis'><i class="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>
            <div className="profile_img">
                <img
                src={profile} alt=""
                />
            </div>
        </div>
        <div className='atomic'>
        <div class="logo-container">
        <img className="logo" src={logo} alt="Your Logo"/>
        </div>
        <div className='Atomic_txt'>
            <h1 id='atomic_title'>Atomic Code</h1>
            <p>Its a special group of developpers who have the possibilty to acheve your needs for all<br/> what's realted to creating web sites,mobile applications,desktop apps and more.. including support and advicing <br/> for better expierience and management</p>
            <button id='atomic_btn'>Check Website</button>
        </div>
        </div>
        </section>

    );
}

export default Profile;
