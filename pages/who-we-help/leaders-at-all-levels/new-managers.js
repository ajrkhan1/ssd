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
                <title>Leadership Training for New Managers | Blanchard International</title>
                <meta name="description" content="Support your new managers with leadership development training from Blanchard." />
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
                                <li><a><span>NEW MANAGERS</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="innerbedkms text-center">
                                <h1>New Managers</h1>
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
                                <img src="/assets/img/kbnew/business-meeting-office.jpg" alt="Images" />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                    Set new managers up for success
                                </h2>
                                <p className="pbb-0">
                                    When you promote your high potential individual contributors into their first people manager role, you want to ensure they are successful. It’s critical that you support those who are new to managing people with the necessary leadership tools and training, right from the start.
                                </p>
                                <h4 className="hforh">Build early momentum</h4>
                                <p className="pbb-0">
                                    Give new managers the confidence and skills they need to lead productive teams.
                                </p>
                                <h4 className="hforh">Engage employees</h4>
                                <p className="pbb-0">
                                    Making the shift from being an individual contributor requires learning how to balance managing execution with engaging employees.
                                </p>
                                <h4 className="hforh">Develop communication skills</h4>
                                <p className="pbb-0">
                                    Clearly communicating organizational goals and how the team’s work supports them is critical for new manager success.
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
                            <h2 className="sectionh">Empower first-time managers with decades of training experience</h2>
                            <p className="headingp">
                                It’s not surprising that 49% of new managers don’t feel prepared to succeed, since 60% don’t receive the right training for their new role. At Blanchard, our approach to leadership training for new managers builds on the time-tested principles from the best-selling book, The New One Minute Manager®(Opens in a new window), and introduces the mindset, core conversations, and communication skills first-time managers need to achieve success quickly, including how to:
                            </p>
                            <ul className="ptt-20">
                                <li>Move direct reports forward on goals</li>
                                <li>Provide timely, constructive, balanced, and actionable feedback</li>
                                <li>Conduct one-on-ones</li>
                                <li>Drive accountability for progress against objectives and results</li>
                                <li>Perform regular progress reviews of goals</li>
                                <li>Communicate clearly, making meaning for others through transparent dialogue and active listening</li>
                                <li>Provide resources and empowering direct reports to deliver on responsibilities</li>
                                <li>Guide, coach, and train team members on the job</li>
                                <li>Advocate for resources to help the team achieve its goals</li>
                            </ul>
                            
                        </div>
                        <div className="col-sm-6 pa0000">
                            <div className="mimg100 pll-90">
                                <img className="" src="/assets/img/kbnew/Empower-first-time-managers.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='ExperiencesCourses pbb-60 ptt-50'>
                <div className='container'>
                    <div className='row'>
                      
                        <div className='col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <h2 className='pbb-50'>New Manager Programs</h2>
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
                            <h2 className="sectionh">Give new managers a foundation for leadership success</h2>
                            <p className="headingp text-justify pbb-10">
                            Blanchard understands that even the best-performing individual contributors can have difficulty making the transition into the role of people manager. Work with us to develop learning journeys for your new people managers that promote adopting new skills that will set them—and their teams—up for success. Together, we will develop a training strategy that links learning goals and objectives to your operational imperatives, allowing individual contributors to understand the “what’s in it for me” and the importance to the organization.
                            </p>                            
                            <a href='/get-started' className='kbbtn kbbtn--orange mtt-20'>Talk to an Expert</a>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/assets/img/kbnew/Unleash-your-leadership2.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}