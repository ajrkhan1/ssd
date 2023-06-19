import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";

export default function ThanYouLP() {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
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
                <title>About Us | Blanchard International</title>
                <meta name="description" content="Learn what makes Blanchard’s leadership and management training content the industry leader, used by the world’s most innovative companies." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="bredkums bgdarkc borderedus0">
                <div className="container-fluid poss bcxx">
                    <div className="row">
                        <div className="col-sm-12 ptt-25 pbb-50">
                            <ul>
                                <li className="brdlifirst"><a href="/">HOME</a></li>
                                <li><a><span>ABOUT US</span></a></li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 pa0000">
                                <img className="" src="/assets/img/kbnew/Debbie-Ung.jpg" alt="Images" />
                            </div>
                            <div className="col-sm-6">
                                <div className="innerbedkms">
                                    <h1>Blanchard Starts at the Heart of Leadership to Turn Potential Into Performance</h1>
                                    <p>
                                        Blanchard starts at the heart of leadership, helping leaders view every exchange as an opportunity to foster trust and deepen relationships. We originate dynamic, human-powered learning experiences that enable leaders at all levels to turn potential into performance. These inspired leaders become the ultimate agents of progress and transformation for their people, work, and organizations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-30 uncommonapproach bgdarkc">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Why Blanchard</h2>
                            <p className="headingp">
                                We maximize individual achievement and organizational performance—enabling measurable progress and true transformation.
                            </p>
                            <ul className="ptt-20">
                                <li>Relevant, resonant, and research-backed content</li>
                                <li>Simple and powerful models that work—and the data to prove it</li>
                                <li>Learning experiences that create connections and outcomes</li>
                                <li>Coaching that maximizes achievement</li>
                                <li>Measurement strategies that show results</li>
                            </ul>

                        </div>
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/assets/img/kbnew/Hero-Video-frame.jpg" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="BlanchardAdvantage">
                <div className="container pbb-50 ptt-30">
                    <div className='row'>
                        <div className='col-sm-12 text-center pbb-40'>
                            <h2 className='sectionh ptt-50'>Our Vision</h2>
                            <h3 className="pbb-40">Leaders Powered for Good</h3>
                            <hr className=""></hr>
                            <h2 className='sectionh ptt-50'>Our Mission</h2>
                            <p className='textbox fontc24 pbb-40'>
                                Blanchard’s leadership experts, proven content, and dynamic learning <br></br>experiences maximize individual achievement and organizational performance.
                            </p>
                            <hr></hr>

                            <h2 className='sectionh ptt-50'>Our Values</h2>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <h4>Be True</h4>
                                <p>
                                    From business decisions to daily interactions, we remain true to our values. Grounded in transparency and directness, we strive to consistently do what’s right by our clients and our people.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <h4>Scale Kindness</h4>
                                <p>
                                    First, do no harm. We serve others with compassion, love, and grace. We act as though the world is watching, always stopping to ask, “Is it fair, balanced, and right?”
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <h4>Transform Together</h4>
                                <p>
                                    Transformation is not realized by one individual. Heart and mind-aligned leaders inspire teams to reach new heights of achievement together.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='reinner'>
                                <h4>Relentless Pursuit</h4>
                                <p>
                                    True leadership is a persistent learning quest. We are a constant resource for those navigating this journey, inspiring people to continuously redefine their personal bests.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-12 OurCommitment">
                            <h2 className='sectionh ptt-50'>Our Commitment to an Inclusive Workplace</h2>
                            <a href="#">Our Commitment to DEI <i class="bx bx-right-arrow-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>


            <section className='SuccessStory'>
                <div className='container ptt-90 pbb-60'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6'>
                            <div>
                                <h2>
                                    Developing tomorrow’s leaders, today
                                </h2>
                                <p className="pf16w">
                                    Drs. Ken and Marjorie Blanchard founded The Ken Blanchard Companies in 1979 with three simple goals—to make a difference in people’s lives, drive human worth and effectiveness in the workplace, and help each organization we work with become the provider, employer, and investment of choice.
                                </p>
                            </div>
                        </div>

                        <div className='col-sm-6'>
                            <div className='pll-100 mimg100 imgborder'>
                                <img src="/assets/img/kbnew/Ken-and-Margie-about-us.jpg" alt="Images" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className=" ExploreCustom Ourpeople">
                <div className="container ptt-70 pbb-60">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="mimg100 imgborder prr-90">
                                <img className="" src="/assets/img/kbnew/our-people.jpg" alt="Images" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="sectionh">Our people</h2>
                            <p className="headingp text-justify pbb-10">
                                Delivering innovative leadership development solutions to the world’s leading companies and individuals takes a team of dedicated learning and development professionals with diverse skill sets. We’ve intentionally built a company that attracts leadership development and learning professionals who conduct research and deliver thought leadership that shapes the way we develop our people.
                            </p>
                            <div className="twobtninone">
                                <a href='#' className='kbbtn kbbtn--orange mtt-20'>Our People</a>
                                <a href='#' className='kbbtn kbbtn--orange mtt-20 blanbtn'>Our Culture</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptt-60 pbb-60 ExploreCustom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h2 className="sectionh">Working at Blanchard</h2>
                            <p className="headingp text-justify pbb-10">
                                Are you a leadership development professional who strives to be part of an organization that is committed to creating a positive impact on the way people work, worldwide? At Blanchard, we strive to foster a collaborative, innovative, and values-driven culture with an emphasis on personal and professional growth.
                            </p>
                            <div className="twobtninone">
                                <a href='#' className='kbbtn kbbtn--orange mtt-20'>Join Us</a>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="mimg100 imgborder pll-90">
                                <img className="" src="/assets/img/kbnew/Why-blanchard.jpg" alt="Images" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="AwardsRecognition">
                <div className="container ptt-60 pbb-60">
                    <div className="row align-items-center">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8 text-center">
                            <h2 className="sectionh">Awards & Recognition</h2>
                            <p className="headingp pbb-10 fontc20">
                                We’re grateful that our industry has recognized the excellence of our solutions and people, and the way in which we put our values into action to create a dynamic workplace.
                            </p>
                        </div>

                        <div className="col-sm-12">
                            <Slider {...settings}>
                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/assets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>

                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/assets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>

                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/assets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>

                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/assets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>

                                <div className="awardboxc">
                                    <div className="avardinnerc">
                                        <img className="" src="/assets/img/kbnew/2023-Training-Industry-Top-20-Leadership-Training.png" alt="Images" />
                                        <p className="ptt-10">Top 20 Leadership Training Company</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className="col-sm-12 text-center ptt-50">
                            <div className="twobtninone">
                                <a href='#' className='kbbtn kbbtn--orange mtt-20'>View All Awards</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className='SuccessStory'>
                <div className='container ptt-90 pbb-60'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 text-center'>
                            <div>
                                <h2>
                                    Local Presence, Global Reach
                                </h2>
                                <p className="pf16w">
                                    The Blanchard team is located around the globe, bringing you localized leadership development training and courses across cultures and continents.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-12 text-center pbb-60">
                            <div className="twobtninone">
                                <a href='#' className='kbbtn kbbtn--orange mtt-20'>Explore our global locations</a>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className="countercc">
                                <h3>300+</h3>
                                <span>Facilitators & Consultants</span>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className="countercc">
                                <h3>70</h3>
                                <span>Countries</span>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className="countercc">
                                <h3>29</h3>
                                <span>Languages</span>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className="countercc">
                                <h3>140+</h3>
                                <span>Coaches</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}