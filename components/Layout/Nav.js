import React from "react";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

import Link from 'next/link'

function Nav() {
    return (
        <>

            <div className="navbar-area formobile">
                <div className="mobile-nav">
                    <a href="/" className="logo">
                        <img src="/assets/img/kblogo.png" alt="Logo" />
                    </a>
                    <ResponsiveNavbar

                        styles={{
                            navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
                            navigationBarSmall: {
                                backgroundColor: 'aliceblue',
                            },
                            navigationCardSmall: {
                                backgroundColor: 'aliceblue',
                            },
                        }}
                    >
                        <nav class="mean-nav dblock">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">PRODUCTS &amp; SERVICES <i class="bx bx-chevron-down"></i></a>

                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item">
                                            <a href="/products-services/slii-experience" class="nav-link">The SLII Experience™</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/blanchard-management-essentials" class="nav-link">Blanchard Management Essentials</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/self-leadership" class="nav-link">Self Leadership</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/coaching-essentials" class="nav-link">Coaching Essentials</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/building-trust" class="nav-link">Building Trust</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/leading-people-through-change" class="nav-link">Leading People Through Change</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/team-leadership" class="nav-link">Team Leadership</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/customer-service-training" class="nav-link">Legendary Service</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/online-learning-training" class="nav-link">Online Learning</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/coaching-services" class="nav-link">Coaching Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/products-services/conversational-capacity" class="nav-link">Conversational Capacity</a>
                                        </li>
                                    </ul>
                                    <a class="mean-expand" href="#" style={{ "font-size": "18px" }}>+</a></li>
                                <li class="nav-item">
                                    <a href="/how-we-work-with-you" class="nav-link">HOW WE WORK WITH YOU</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">EVENTS &amp; WORKSHOP
                                        <i class="bx bx-chevron-down"></i></a>
                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item d-none">
                                            <a href="/events-workshops/program-experience-webinar" class="nav-link">Program Experience &amp; Webinars</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/events-workshops/virtual-public-workshop" class="nav-link">Virtual Public Workshops</a>
                                        </li>
                                    </ul>
                                    <a class="mean-expand" href="#" style={{ "font-size": "18px" }}>+</a></li>

                                <li class="nav-item">
                                    <a href="/about-us" class="nav-link">ABOUT US<i class="bx bx-chevron-down"></i></a>
                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item">
                                            <a href="/about-us/meet-the-team" class="nav-link">Meet The Team</a>
                                        </li>
                                    </ul>
                                    <a class="mean-expand" href="#" style={{ "font-size": "18px" }}>+</a></li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">RESOURCES</a>
                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item">
                                            <a href="/blog" class="nav-link">BLOG</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/podcast">Podcast</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/ebooks">Ebooks</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/white-paper">White Paper</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item mean-last">
                                    <a href="/get-started" class="nav-link">GET STARTED</a>
                                </li>


                            </ul>
                        </nav>
                    </ResponsiveNavbar>
                </div>
                <div className="main-nav nav-two">
                    <div className="container-fluid">
                        <div className="container-max">
                            <nav className="navbar navbar-expand-md navbar-light ">
                                <Link href="/"><a className="navbar-brand"><img src="/assets/img/kblogo.png" alt="Logo" /></a></Link>
                                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <Link href="what-we-do">
                                                <a className="nav-link active">What We Do <i className='bx bx-chevron-down'></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a href="#">Propel by Blanchard</a>
                                                        <p>
                                                            Membership accelerates leadership and professional growth through live, facilitated courses, best-in-class online content, and collaborative experiences.
                                                        </p>
                                                        <a href="#">Blanchard Design Studio</a>
                                                        <p>Our solutions combine our award-winning content and methodologies with a collaborative design process.</p>
                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="#">What We Do <i className="fa fa-angle-right"></i></a>
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Leadership Development Programs</a></li>
                                                                    <li><a href="#">Learning Journeys</a></li>
                                                                    <li><a href="#">Digital & Virtual Learning Experiences</a></li>
                                                                    <li><a href="#">Propel by Blanchard</a></li>
                                                                    <li><a href="#">Keynotes</a></li>
                                                                    <li><a href="#">Content Licensing</a></li>
                                                                    <li><a href="#">Public Courses</a></li>
                                                                    <li><a href="#">Training for Trainers</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Coaching</a></li>
                                                                    <li><a href="#">Facilitation</a></li>
                                                                    <li><a href="#">Measurement & Impact</a></li>
                                                                    <li><a href="#">Assessments</a></li>
                                                                    <li><a href="#">Badging</a></li>
                                                                    <li><a href="#">Moderation & Community Management</a></li>
                                                                    <li><a href="#">Reinforcement & Sustainment</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Curated Learning Journeys</a></li>
                                                                    <li><a href="#">Customized Learning Experiences</a></li>
                                                                    <li><a href="#">Custom Coaching Solutions</a></li>
                                                                    <li><a href="#">Executive Development Experiences</a></li>
                                                                    <li><a href="#">Content Integration</a></li>
                                                                    <li><a href="#">Talent Strategy</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/who-we-help"><a className="nav-link">Who We Help  <i className='bx bx-chevron-down'></i></a></Link>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a href="#">New Managers</a>
                                                        <p>
                                                        When you promote your high potential individual contributors into their first people manager role, you want to ensure they are successful.
                                                        </p>
                                                        <a href="#">Senior Leaders</a>
                                                        <p>These leaders are the key to creating an inclusive, high performance workplace culture that reflects the company’s values.</p>
                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="#">Who We Help <i className="fa fa-angle-right"></i></a>
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Leaders At All Levels</a></li>
                                                                    <li><a href="#">Emerging Leaders</a></li>
                                                                    <li><a href="#">New Managers</a></li>
                                                                    <li><a href="#">Experienced Leaders</a></li>
                                                                    <li><a href="#">Senior Leaders</a></li>
                                                                    <li><a href="#">Executives</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Organizations</a></li>
                                                                    <li><a href="#">Training Professionals</a></li>
                                                                    <li><a href="#">Coaching Professionals</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Teams</a></li>
                                                                    <li><a href="#">Individuals</a></li>
                                                                    <li><a href="#">Students</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/our-content">
                                                <a className="nav-link">Our Content
                                                    <i className='bx bx-chevron-down'></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a href="#">Courageous Inclusion</a>
                                                        <p>
                                                        The program teaches participants how to become more knowledgeable and active advocates of inclusion in their workplace.
                                                        </p>
                                                        <a href="#">Essential Motivators Program</a>
                                                        <p>Learners identify their pattern of core psychological needs, values, talents, and behaviors so they can better understand themselves and others.</p>
                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="#">Our Content <i className="fa fa-angle-right"></i></a>
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Leadership Development Programs</a></li>
                                                                    <li><a href="#">Learning Journeys</a></li>
                                                                    <li><a href="#">Digital & Virtual Learning Experiences</a></li>
                                                                    <li><a href="#">Propel by Blanchard</a></li>
                                                                    <li><a href="#">Keynotes</a></li>
                                                                    <li><a href="#">Content Licensing</a></li>
                                                                    <li><a href="#">Public Courses</a></li>
                                                                    <li><a href="#">Training for Trainers</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Coaching</a></li>
                                                                    <li><a href="#">Facilitation</a></li>
                                                                    <li><a href="#">Measurement & Impact</a></li>
                                                                    <li><a href="#">Assessments</a></li>
                                                                    <li><a href="#">Badging</a></li>
                                                                    <li><a href="#">Moderation & Community Management</a></li>
                                                                    <li><a href="#">Reinforcement & Sustainment</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Curated Learning Journeys</a></li>
                                                                    <li><a href="#">Customized Learning Experiences</a></li>
                                                                    <li><a href="#">Custom Coaching Solutions</a></li>
                                                                    <li><a href="#">Executive Development Experiences</a></li>
                                                                    <li><a href="#">Content Integration</a></li>
                                                                    <li><a href="#">Talent Strategy</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="resources" className="nav-link">Resources<i className='bx bx-chevron-down'></i></a>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a href="#">Blanchard Community</a>
                                                        <p>
                                                        Learn about the Blanchard Community and how to join.
                                                        </p>
                                                        <a href="#">Upcoming Webinar</a>
                                                        <p>
                                                        Join us June 20th at 7am PDT for our next webinar: Flexibly Matching Your Leadership Style to the Needs of Your People
                                                        </p>
                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="#">Resources <i className="fa fa-angle-right"></i></a>
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Leadership Development Programs</a></li>
                                                                    <li><a href="#">Learning Journeys</a></li>
                                                                    <li><a href="#">Digital & Virtual Learning Experiences</a></li>
                                                                    <li><a href="#">Propel by Blanchard</a></li>
                                                                    <li><a href="#">Keynotes</a></li>
                                                                    <li><a href="#">Content Licensing</a></li>
                                                                    <li><a href="#">Public Courses</a></li>
                                                                    <li><a href="#">Training for Trainers</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Coaching</a></li>
                                                                    <li><a href="#">Facilitation</a></li>
                                                                    <li><a href="#">Measurement & Impact</a></li>
                                                                    <li><a href="#">Assessments</a></li>
                                                                    <li><a href="#">Badging</a></li>
                                                                    <li><a href="#">Moderation & Community Management</a></li>
                                                                    <li><a href="#">Reinforcement & Sustainment</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Curated Learning Journeys</a></li>
                                                                    <li><a href="#">Customized Learning Experiences</a></li>
                                                                    <li><a href="#">Custom Coaching Solutions</a></li>
                                                                    <li><a href="#">Executive Development Experiences</a></li>
                                                                    <li><a href="#">Content Integration</a></li>
                                                                    <li><a href="#">Talent Strategy</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/about-us">
                                                <a className="nav-link">About Us<i className='bx bx-chevron-down'></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-sm-3 bigmenu1">
                                                        <h4>Trending Now:</h4>
                                                        <a href="#">The Blanchard Institute</a>
                                                        <p>
                                                        The Blanchard Institute is focused on leadership training for middle and high school age students to teach the mindset and skillset of a self leader.
                                                        </p>
                                                       
                                                    </div>
                                                    <div className="col-sm-9 bodlet">
                                                        <div className="row bigmenua">
                                                            <div className="col-sm-12">
                                                                <h3>
                                                                    <a className="mh3" href="#">About Us <i className="fa fa-angle-right"></i></a> 
                                                                </h3>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Leadership Development Programs</a></li>
                                                                    <li><a href="#">Learning Journeys</a></li>
                                                                    <li><a href="#">Digital & Virtual Learning Experiences</a></li>
                                                                    <li><a href="#">Propel by Blanchard</a></li>
                                                                    <li><a href="#">Keynotes</a></li>
                                                                    <li><a href="#">Content Licensing</a></li>
                                                                    <li><a href="#">Public Courses</a></li>
                                                                    <li><a href="#">Training for Trainers</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Coaching</a></li>
                                                                    <li><a href="#">Facilitation</a></li>
                                                                    <li><a href="#">Measurement & Impact</a></li>
                                                                    <li><a href="#">Assessments</a></li>
                                                                    <li><a href="#">Badging</a></li>
                                                                    <li><a href="#">Moderation & Community Management</a></li>
                                                                    <li><a href="#">Reinforcement & Sustainment</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul className="biginnerm">
                                                                    <li><a href="#">Curated Learning Journeys</a></li>
                                                                    <li><a href="#">Customized Learning Experiences</a></li>
                                                                    <li><a href="#">Custom Coaching Solutions</a></li>
                                                                    <li><a href="#">Executive Development Experiences</a></li>
                                                                    <li><a href="#">Content Integration</a></li>
                                                                    <li><a href="#">Talent Strategy</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="nav-btn">
                                        <Link href="/get-started"><a className="default-btn btn-bg1 border-radius-5">Build Your Journey</a></Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav