import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";

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
                <title>Leadership Training for Senior Leaders | Blanchard International</title>
                <meta name="description" content="Help your senior leaders continue to grow their management skills with leadership development training from Blanchard." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="bredkums2 colortheme4bg pbb-100 border-bottom-left-radius-70">
                <div className="container-fluid poss">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/">HOME</a></li>
                                <li className="brdlifirst"><a href="/who-we-help">WHO WE HELP</a></li>
                                <li className="brdlifirst"><a href="/leaders-at-all-levels">LEADERS AT ALL LEVELS</a></li>
                                <li><a><span>SENIOR LEADERS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>Senior Leaders</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Innovativelearning contanerbgc'>
                <div className='container-fluid ptt-90 pbb-60 borderedus0 contanerbgc'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6 pa0000'>
                            <div className='prr-90'>
                                <img src="/assets/img/kbnew/Prepare-Your-Next-Generation-of-Executive.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                Prepare your next generation of executive leaders
                                </h2>
                                <p className="pbb-0">
                                In leading critical business functions, your senior leaders are the bridges between the executive team’s vision and the managers of the company’s day-to-day execution. Senior leaders are charged with translating broad goals into departmental and operating unit tasks.
                                </p>
                                <h4 className="hforh">Connect to the company’s vision</h4>
                                <p className="pbb-0">
                                Sharing their leadership POV and personal stories, these leaders show employees the connection between their work and the company’s long-term vision.
                                </p>
                                <h4 className="hforh">Motivate teams</h4>
                                <p className="pbb-0">
                                Great senior leaders inspire and engage their teams through effective communication, creating a culture of high performance and accountability, and fostering an inclusive work environment.
                                </p>
                                <h4 className="hforh">Create a customer-centric organization</h4>
                                <p className="pbb-0">
                                As advocates for exceptional internal and external customer service, senior leaders set the example for accountability, innovation, and soliciting feedback to anticipate customer needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ptt-60 pbb-60 uncommonapproach rightimgc colortheme2bg">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Senior leaders operationalize the organization’s vision and values</h2>
                            <p className="headingp">
                            Senior leaders transform the company’s vision into departmental and division goals, fostering cross-organizational collaboration, leading change initiatives, and inspiring innovation. These leaders are the key to creating an inclusive, high-performance workplace culture that reflects the company’s values. Blanchard believes senior leaders benefit from evidence-based leadership training frameworks and opportunities to discuss challenges and share best practices with their senior management peers. In their roles, senior leaders must be able to:
                            </p>
                            <ul className="ptt-20">
                                <li>Identify and implement appropriate work structures and processes to accomplish goals</li>
                                <li>Bring cross disciplinary knowledge to bear on issues and opportunities</li>
                                <li>Manage and develop effective working relationships with people from other functions to achieve common objectives </li>
                                <li>Create a nimble environment based on a culture of adjustments and realignment</li>
                                <li>Advance diversity and inclusion, engaging diverse teams to solve business challenges</li>
                                <li>Investigate and adopt best practices from within and outside the organization</li>
                            </ul>                            
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/assets/img/kbnew/Senior-leaders-operationalize.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='ExperiencesCourses ptt-50 pbb-60'>
                <div className='container'>
                    <div className='row'>
                      
                        <div className='col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <h2 className='pbb-50'>Senior Leader Programs</h2>
                                </div>
                                <div className='col-sm-4 viewall'>
                                    <a href='#'>Explore Additional Solutions <i class="bx bx-right-arrow-alt"></i></a>
                                </div>
                            </div>
                        </div>





                        <div className='col-sm-12'>
                            <Slider {...settings2}>
                                <div className='slxpd30'>
                                    <div className='slbox greenboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg1'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                            <div className="slboxheight">
                                                <span className='sltype'>Program</span>
                                                <h3>SLII® Powering Inspired Leaders™</h3>
                                                <p>Only situational leaders can motivate their workers to rise to the challenge.</p>
                                            </div>
                                            <a href='#' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>

                                <div className='slxpd30'>
                                    <div className='slbox darkblueboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg2'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                        <div className="slboxheight">
                                            <span className='sltype'>Program</span>
                                            <h3>Coaching Essentials®</h3>
                                            <p>Essential coaching abilities for managers and leaders</p>
                                            </div>
                                            <a href='#' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>

                                <div className='slxpd30'>
                                    <div className='slbox darkwhiteboxc forwhitec'>
                                        <div className='slboxheader'>
                                            <div className='slboxfigure'>
                                                <div className='slboximg3'></div>
                                            </div>
                                        </div>
                                        <div className='slboxbottom'>
                                        <div className="slboxheight">
                                            <span className='sltype'>Webinar</span>
                                            <h3 className='colortheme'>Essential Motivators™</h3>
                                            <p className='colorblack'>Enhance collaboration by knowing yourself and others</p>
                                            </div>
                                            <a href='#' className='kbbtn kbbtn--orange'>Learn More</a></div>
                                    </div>
                                </div>
                            </Slider>
                        </div>


                    </div>
                </div>
            </section>



            <section className="ptt-60 pbb-60 ExploreCustom Unleashleadership">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Make experienced managers the foundation of your success</h2>
                            <p className="headingp text-justify pbb-10">
                            Senior leaders are your leaders of leaders, providing the vision, coaching, and tested processes and frameworks that enable high-performing teams across your organization. But to do this, they need to gather, learn from, and adapt proven strategies from your organization and beyond. Learn more about how Blanchard can craft a customized leadership and team building program for senior leaders to enhance your organization’s creativity, execution, and productivity.
                            </p>                            
                            <a href='/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/assets/img/kbnew/Make-Experienced-Managers-the-Foundation.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}