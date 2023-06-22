import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';

export default function ThanYouLP() {

    var settings2 = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Essential Motivators | Blanchard International</title>
                <meta name="description" content="Blanchard's Essential Motivators training program teaches people how to improve their interpersonal dynamics to foster collaboration." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="bredkums2 colortheme4bg pbb-100 border-bottom-left-radius-70">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/">HOME</a></li>
                                <li className="brdlifirst"><a href="/our-content/programs">OUR CONTENT</a></li>
                                <li className="brdlifirst"><a href="/our-content/programs">PROGRAMS</a></li>
                                <li><a><span>ESSENTIAL MOTIVATORS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Essential Motivators™</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60 uncommonapproach rightimgc contanerbgc">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">
                            Boost collaboration by better understanding what motivates yourself and others
                            </h2>
                            <p className="headingp">
                            Friction and misunderstandings in work relationships are constant drains on efficiency and cause frustration and problems. When individuals better understand themselves, they can bring their best skills and talents to their work, and collaborate more impactfully and enjoyably with others.  
                            </p>
                            <p className="headingp">
                            Essential Motivators™ provides a framework to help learners identify their core psychological needs, values, talents, and behaviors to better understand themselves and others, be more effective, and appreciate different perspectives. 
                            </p>
                            <a href='/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/assets/img/kbnew/EM-Boost-collaboration-by-better.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ExploreCustom colorthemebg">
                <div className="container colortheme2bg border-bottom-right-radius-70 ptt-60 pbb-60">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/assets/img/kbnew/EM-model-uncover-core-strength.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">Uncover core strengths and needs</h2>
                            <p className="headingp">
                            <b>Essential Motivators</b> teaches an easy-to-apply system of four patterns—Air, Earth, Fire, and Water—that helps people become more comfortable with themselves and more collaborative and effective with others.
                            </p>
                            <p className="headingp">
                            To identify their Essential Motivators pattern, learners are guided through a process of self-discovery. In this process, they: 
                            </p>
                            <ul>
                                <li>Discover their superpower—who they are at their core and their special skills</li>
                                <li>Understand themselves at a deeper level and how their core needs influence them </li>
                                <li>Learn to accept others for who they are and what they need </li>
                                <li>Work more effectively with others, improve communication, and resolve conflict</li>
                            </ul>

                        </div>


                    </div>
                </div>
            </section>




            <section className="colorthemebg DeliveryOptions ptt-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 text-center pbb-40">
                            <h2>Delivery Options to Meet Your Needs</h2>
                            <p className="pcl">
                            Essential Motivators can be delivered as virtual sessions, as part of a learning journey, or in a self-directed online or moderated online version, so your learners can identify their core needs wherever they are and whenever they have time.
                            </p>
                        </div>

                        <div className="col-sm-12">
                            <div className="ourstabs">
                                <Tabs>
                                    <TabList className="lefttab">                                        
                                        <Tab>
                                            <img className="" src="/assets/img/kbnew/icon/Virtual.svg" alt="Images" />
                                            <span>Virtual</span>
                                        </Tab>
                                        <Tab>
                                            <img className="" src="/assets/img/kbnew/icon/Online.svg" alt="Images" />
                                            <span>Online</span>
                                        </Tab>

                                    </TabList>

                                    <TabPanel className="tabdetails colortheme2bg">
                                        <div className="">
                                            <div className="tabinner">                                           
                                                <p>
                                                This design is a six-week online learning journey with weekly 60-minute live virtual sessions that include interactive discussions and breakout sessions. The course is a rich, easy-to-understand theory of temperament that will help participants better understand themselves and others and learn to value and appreciate different perspectives. This design provides key concepts, models, discussion questions, practice, and application over a six-week multifaceted learning experience. 
                                                </p>
                                                <p>
                                                    <b>Week 1: Getting Started -</b> Discover the nature of the Essential Motivators patterns and how we express them through our core needs, values, talents, and behaviors.
                                                </p>
                                                <p>
                                                    <b>Week 2: Understanding Self -</b> Learn about the four Essential Motivators patterns: Fire, Earth, Air, and Water. 
                                                </p>
                                                <p>
                                                    <b>Week 3: Clarifying the Patterns -</b> Explore the patterns further through the dimensions of language, roles, and attention.
                                                </p>
                                                <p>
                                                    <b>Week 4: Stressors and Stereotypes -</b> Discover how stress manifests for each pattern and how to reduce stress in oneself and others. Explore the stereotype side of each pattern that can influence the perception of others.
                                                </p>

                                                <p>
                                                    <b>Week 5: Understanding Others -</b> Discover how people's shadow pattern—the pattern least like themselves—can affect how they react to others. Identify others within each of the four patterns. 
                                                </p>

                                                <p>
                                                    <b>Week 6: Putting It into Practice -</b> Shift perspective and accept others for who they are and what they need, even if they are different from oneself.
                                                </p>

                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className="tabdetails colortheme2bg">
                                        <div className="">
                                            <div className="tabinner">
                                                <h3>Online Overview with Debrief </h3>
                                                <p>
                                                This design includes a 35-minute online overview to teach the core content, which will help participants identify  their pattern of core psychological needs, values, talents, and behaviors to better understand themselves and others, be more effective, and appreciate different perspectives. 
                                                </p>
                                                <h3>Online Overview with Debrief</h3>
                                                <p>
                                                This design includes a 35-minute online overview to teach the core content, which will help participants identify their pattern of core psychological needs, values, talents, and behaviors to better understand themselves and others, be more effective, and appreciate different perspectives.
                                                </p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          


            <section className="ptt-90 ExploreCustom colorthemebg">
                <div className="container mbordee pbb-60 ptt-60 mbordee colortheme2bg">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/assets/img/kbnew/EM-understanding-employee-motivators-equips.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">Understanding employee motivators equips you to meet their needs</h2>
                            <p className="headingp text-justify pbb-10 font2438">
                            When employees feel their needs have been met, they report a 30% higher capacity to focus, a nearly 50% higher level of engagement, and a 63% greater likelihood to stay at the company. 1
                            </p>
                        </div>
                        <div className="col-sm-12 ptt-60 pbb-20">
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </section>

            <section className='colortheme2bg'>
                <div className='container-fluid ptt-10 pbb-60 borderedus0'>
                    <div className='row align-items-center'>
                        <div className="col-sm-2"></div>
                        <div className='col-sm-8 pbb-70'>
                            <div className="text-center">
                                <h2 className="sectionh">
                                Understand Different Perspectives To Fuel Deeper Collaboration
                                </h2>
                                <p>
                                The Essential Motivators framework was developed by author and expert Linda Berens, who has over forty years of experience in teaching people to recognize their strengths, transcend their weaknesses, and work together better.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/assets/img/kbnew/icon/increase-effectiveness.svg" alt="Images" />
                                <h3 className="lineh34">Increase Effectiveness</h3>
                                <p>
                                Organizational effectiveness rises as people learn how to recognize others' core needs and work more collaboratively and synergistically.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/assets/img/kbnew/icon/Improve-employee-engagement.svg" alt="Images" />
                                <h3 className="lineh34">Improve Employee Engagement</h3>
                                <p>
                                Helps people learn how their core needs influence their motivation, career satisfaction, communication, and problem-solving.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/assets/img/kbnew/icon/boost-empathy.svg" alt="Images" />
                                <h3 className="lineh34">Boost Empathy</h3>
                                <p>
                                Increases appreciation for diversity and inclusion as people shift perspectives and learn to accept others for who they are.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="AProfessional pll-20 prr-20">
                                <img className="" src="/assets/img/kbnew/icon/Deepen-collaboration.svg" alt="Images" />
                                <h3 className="lineh34">Deepen Collaboration</h3>
                                <p>
                                Strengthens relationships and understanding of each other’s perspectives, building empathy and trust. 
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='SuccessStory'>
                <div className='container-fluid ptt-90 pbb-60'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Client Success Story
                                </h2>
                                <h4>
                                MANUFACTURING
                                </h4>
                                <h3>Cascades Worldwide upskilling frontline leaders</h3>

                                <p>
                                Learn how Cascades focused on learners’ needs to deliver leadership development and improve business results.
                                </p>
                                <a href='#' className='kbbtn kbbtn--orange  mtt-10'>Read Client Story</a>
                            </div>
                        </div>

                        <div className='col-sm-6 pa0000'>
                            <div className='pll-100'>
                                <img src="/assets/img/kbnew/Cascades-spotlight.jpg" alt="Images" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="ptt-90 ExploreCustom colortheme4bg">
                <div className="container contanerbgc mbordee pbb-60 ptt-60">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Ready to Get Started?</h2>
                            <p className="headingp text-justify pbb-10">
                            Essential Motivators is delivered as part of a Learning Journey or a self-directed online course. Contact us today to learn how we can help your leaders learn the skills they need to be more effective communicators.
                            </p>
                            <a href='/get-started' className='kbbtn kbbtn--orange  mtt-10'>Talk to an Expert</a>
                        </div>
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-30">
                                <div className="row text-center mmcsh">
                                    <div className="col-sm-12 pbb-30">
                                        <h3 className="sectionh">Learn More</h3>
                                    </div>
                                    <div className="col-sm-6 borderrrrr">
                                        <a href="#">
                                            <img src="/assets/img/kbnew/icon/One-pagers_One-Pager.svg" alt="Images" />
                                            <h4>Download Overview</h4>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#">
                                            <img src="/assets/img/kbnew/icon/View-SLII-Resources.svg" alt="Images" />
                                            <h4>View Related Resources</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}