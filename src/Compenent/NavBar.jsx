import React, { Component } from "react";
import iconH from "../assets/school-bag.png";
import hat from "../assets/graduation-hat.png";
import lamp from "../assets/idea (1).png";
import user from "../assets/man-avatar.png";

class NavBar extends Component {
    state = {
        clicked: false,
        activeSection: "home"
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            this.setState({ activeSection: id });
        }
    }
    

    setActiveSection = (section) => {
        this.setState({ activeSection: section });
    }

    render() {
        return (
            <nav>
                <h1 id="Nav_text">
                    <a href="atomic.com">
                        <span className="Gray">S</span>mira{" "}
                        <span className="Gray">A</span>nis
                    </a>
                </h1>
                <div>
                    <ul id="Navbar" className={this.state.clicked ? "Navbar active" : "Navbar"}>
                        <li><a href="#Profile_elements" onClick={(e) => { e.preventDefault(); this.handleSmoothScroll("home"); }} className={this.state.activeSection === "home" ? "active" : ""}><i className="icon-menu fas fa-house"></i>Home</a></li>
                        <li><a href="#Skills_page" onClick={(e) => { e.preventDefault(); this.handleSmoothScroll("Skills_page"); }} className={this.state.activeSection === "Skills_page" ? "active" : ""}><img src={iconH} alt=""/> Skills</a></li>
                        <li><a href="#Experiences_page" onClick={(e) => { e.preventDefault(); this.handleSmoothScroll("Experiences_page"); }} className={this.state.activeSection === "Experiences_page" ? "active" : ""}><img src={hat} alt=""/> Experiences</a></li>
                        <li><a href="#Project_page" onClick={(e) => { e.preventDefault(); this.handleSmoothScroll("Projects_page"); }} className={this.state.activeSection === "Projects_page" ? "active" : ""}><img src={lamp} alt=""/> Projects</a></li>
                        <li><a href="#About_Page" onClick={(e) => { e.preventDefault(); this.handleSmoothScroll("About_Page"); }} className={this.state.activeSection === "About_Page" ? "active" : ""}><img src={user} alt=""/> About me</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        )
    }
}

export default NavBar;
