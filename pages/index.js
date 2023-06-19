import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {
   var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 3000,
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

   var settings2 = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3.4,
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
            <title>Leadership Training in India | Leadership Training Programs - Blanchard</title>
            <meta name="description" content="Lead the winning path with Leadership training programs in India. Acquiring Leadership training by the experts help in the development of the individuals." />
            <script
               dangerouslySetInnerHTML={{
                  __html: `
              !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '1039427466993495'); 
fbq('track', 'PageView');
          `,
               }}
            />

            <noscript>
               <img height="1" width="1"
                  src="https://www.facebook.com/tr?id=1039427466993495&ev=PageView&noscript=1" />
            </noscript>
         </Head>

         <section className='kbisblanchard'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12'>
                     <div className='kbisblanchardin'>
                        <h1>The Ken Blanchard Companies® is now Blanchard®!</h1>
                        <a href='#' className='kbbtn kbbtn--orange'>Learn More</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='bannehome'>
            <div className='container-fluid bgreduiswihite'>
               <div className='row align-items-center'>
                  <div className='col-sm-7'>
                     <div className='left-ba'>
                        <h1>The Heart of Human Achievement™</h1>
                        <p>Creating inspired leaders through dynamic, human-powered learning experiences</p>
                        <a href='#' className='kbbtn kbbtn--orange'>Learn More</a>
                     </div>
                  </div>
                  <div className='col-sm-5'>
                     <div>
                        <img src="/assets/img/kbnew/banner-right.jpg" alt="Images" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='TrendingInsights ptt-60 pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12'>
                     <div className='row'>
                        <div className='col-sm-6'>
                           <h2 className='pbb-50'>Trending Insights</h2>
                        </div>
                        <div className='col-sm-6 viewall'>
                           <a href='#'>View All Trending Insights <i class="bx bx-right-arrow-alt"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className='col-sm-3'>
                     <div className='innerbox'>
                        <h3>01</h3>
                        <div className='innerp'>
                           <p>2023 Trends Report: Enhancing the Employee Experience in a Hybrid World</p>
                           <a href='#'>Read Now</a>
                        </div>
                     </div>
                  </div>

                  <div className='col-sm-3'>
                     <div className='innerbox'>
                        <h3>01</h3>
                        <div className='innerp'>
                           <p>2023 Trends Report: Enhancing the Employee Experience in a Hybrid World</p>
                           <a href='#'>Read Now</a>
                        </div>
                     </div>
                  </div>

                  <div className='col-sm-3'>
                     <div className='innerbox'>
                        <h3>01</h3>
                        <div className='innerp'>
                           <p>2023 Trends Report: Enhancing the Employee Experience in a Hybrid World</p>
                           <a href='#'>Read Now</a>
                        </div>
                     </div>
                  </div>

                  <div className='col-sm-3'>
                     <div className='innerbox'>
                        <h3>01</h3>
                        <div className='innerp'>
                           <p>2023 Trends Report: Enhancing the Employee Experience in a Hybrid World</p>
                           <a href='#'>Read Now</a>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section className='Innovativelearning'>
            <div className='container-fluid ptt-90 pbb-60'>
               <div className='row'>
                  <div className='col-sm-6 pa0000'>
                     <div className='prr-90'>
                        <img src="/assets/img/kbnew/Innovative-training-solutions.jpg" alt="Images" />
                     </div>
                  </div>
                  <div className='col-sm-6'>
                     <div>
                        <h2>
                           Innovative learning journeys to meet your most pressing leadership challenges
                        </h2>
                        <p>
                           We’re empowering organizations for the future of work—we meet you and your learners where you are and where you need to be next.
                        </p>
                        <h4>
                           <strong>Our biggest challenges are in:</strong>
                        </h4>
                        <ul>
                           <li><a href='#'>Leadership Capabilities <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='#'>Organizational Performance <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='#'>Change & Agility <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='#'>Personal Effectiveness <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='#'>Diversity & Inclusion <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='#'>Teaming & Collaboration <i class="bx bx-right-arrow-alt"></i></a></li>
                           <li><a href='#'>Engagement & Retention <i class="bx bx-right-arrow-alt"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='LeadershipSolutions'>
            <div className='container pbb-60'>
               <div className='row'>
                  <div className='col-sm-12'>
                     <h2 className='pbb-50'>Leadership Solutions For All</h2>
                  </div>

                  <div className='col-sm-4'>
                     <div className='leadershipinner'>
                        <a href='#' className='leadershpa'>
                           <img src="/assets/img/kbnew/icon/Team-Leaders-and-managers.svg" alt="Images" />
                           <h4>Team Leaders & Managers</h4>
                           <p>
                              Whether you’re just starting your leadership journey or want to hone your leadership skills, Blanchard can help you become an Inspired Leader.
                           </p>
                           <a href='#' className='kbbtn kbbtn--orange'>Learn More</a>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-4'>
                     <div className='leadershipinner'>
                        <a href='#' className='leadershpa'>
                           <img src="/assets/img/kbnew/icon/L-D-professionals.svg" alt="Images" />
                           <h4>Team Leaders & Managers</h4>
                           <p>
                              Whether you’re just starting your leadership journey or want to hone your leadership skills, Blanchard can help you become an Inspired Leader.
                           </p>
                           <a href='#' className='kbbtn kbbtn--orange'>Learn More</a>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-4'>
                     <div className='leadershipinner'>
                        <a href='#' className='leadershpa'>
                           <img src="/assets/img/kbnew/icon/Training-and-coaching-professionals.svg" alt="Images" />
                           <h4>Team Leaders & Managers</h4>
                           <p>
                              Whether you’re just starting your leadership journey or want to hone your leadership skills, Blanchard can help you become an Inspired Leader.
                           </p>
                           <a href='#' className='kbbtn kbbtn--orange'>Learn More</a>
                        </a>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section className='EnablingFuture ptt-50 pbb-10'>
            <div className='container pbb-60'>
               <div className='row'>
                  <div className='col-sm-12 text-center'>
                     <h2 className='sectionh'>Enabling Future-Ready <br></br>Transformation</h2>
                     <p className='headingp pbb-50'>
                        Whether you’re looking to provide guidance and support to new managers, or to help your experienced leaders <br></br>create a more engaged and productive culture, we can help your organization reach its goals.
                     </p>
                  </div>

                  <div className='col-sm-6'>
                     <div className='enablingbox greenboxc'>
                        <h4>Coaching</h4>
                        <p>
                           Personalized, one-on-one, and team leadership coaching to help your executives, managers, and individual learners develop their leadership skills. <a href='#'>Learn More</a>
                        </p>
                     </div>
                  </div>

                  <div className='col-sm-6'>
                     <div className='enablingbox darkblueboxc'>
                        <h4>Leadership Programs</h4>
                        <p>
                           Build your leadership bench strength, create self-motivated<br></br> individuals, improve employee engagement, or lead a change <br></br>initiative. <a href='#'>Learn More</a>
                        </p>
                     </div>
                  </div>

                  <div className='col-sm-6'>
                     <div className='enablingbox blueboxc'>
                        <h4>Customized Learning Experiences</h4>
                        <p>
                           We’ll partner with you, dive into your needs, and create a solution that unlocks your people’s leadership potential. <a href='#'>Learn More</a>
                        </p>
                     </div>
                  </div>

                  <div className='col-sm-6'>
                     <div className='enablingbox darkgeenboxc'>
                        <h4>Public Courses</h4>
                        <p>
                           Leadership development and training courses held worldwide throughout the year, whenever and wherever it works best for you. <a href='#'>Learn More</a>
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section className='ExperiencesCourses pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12 pbb-40'>
                     <hr></hr>
                  </div>
                  <div className='col-sm-12'>
                     <div className='row'>
                        <div className='col-sm-8'>
                           <h2 className='pbb-50'>Experiences and Courses</h2>
                        </div>
                        <div className='col-sm-4 viewall'>
                           <a href='#'>Explore Additional Resources <i class="bx bx-right-arrow-alt"></i></a>
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
                                 <span className='sltype'>Program</span>
                                 <h3>SLII® Powering Inspired Leaders™</h3>
                                 <p>Only those who lead situationally can inspire their teams to rise to the challenge</p>
                                 <a href='#' className='kbbtn kbbtn--orange mtt-20'>Learn More</a></div>
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
                                 <span className='sltype'>Program</span>
                                 <h3>Coaching Essentials®</h3>
                                 <p>Essential coaching skills for managers and leaders</p>
                                 <a href='#' className='kbbtn kbbtn--orange mtt-85'>Learn More</a></div>
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
                                 <span className='sltype'>Webinar</span>
                                 <h3 className='colortheme'>Becoming a Courageously Inclusive Leader</h3>
                                 <p className='colorblack'>Jennifer Brown addresses identity, privilege, and equity</p>
                                 <a href='#' className='kbbtn kbbtn--orange'>Learn More</a></div>
                           </div>
                        </div>

                        <div className='slxpd30'>
                           <div className='slbox darkblueboxc forwhitec'>
                              <div className='slboxheader'>
                                 <div className='slboxfigure'>
                                    <div className='slboximg4'></div>
                                 </div>
                              </div>
                              <div className='slboxbottom'>
                                 <span className='sltype'>New Program</span>
                                 <h3>Essential Motivators™</h3>
                                 <p>Boost collaboration by better understanding yourself and others</p>
                                 <a href='#' className='kbbtn kbbtn--orange  mtt-85'>Learn More</a></div>
                           </div>
                        </div>

                        <div className='slxpd30'>
                           <div className='slbox greenboxc forwhitec'>
                              <div className='slboxheader'>
                                 <div className='slboxfigure'>
                                    <div className='slboximg5'></div>
                                 </div>
                              </div>
                              <div className='slboxbottom'>
                                 <span className='sltype'>Services</span>
                                 <h3>Design Studio</h3>
                                 <p className=' mbb-70'>Custom services to support your learning initiatives</p>
                                 <a href='#' className='kbbtn kbbtn--orange  mtt-100'>Learn More</a></div>
                           </div>
                        </div>

                        <div className='slxpd30'>
                           <div className='slbox darkwhiteboxc forwhitec'>
                              <div className='slboxheader'>
                                 <div className='slboxfigure'>
                                    <div className='slboximg6'></div>
                                 </div>
                              </div>
                              <div className='slboxbottom'>
                                 <span className='sltype'>New Resource</span>
                                 <h3 className='colortheme'>Blanchard Community</h3>
                                 <p className='colorblack'>A global online community that allows members to access discussion forums and virtual events</p>
                                 <a href='#' className='kbbtn kbbtn--orange mtt-55'>Learn More</a></div>
                           </div>
                        </div>

                     </Slider>
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
                           BUSINESS SERVICES
                        </h4>
                        <h3>LexisNexis Risk Solutions: <br></br>Developing Foundational Leadership Skills for Sales Leaders</h3>

                        <p>
                           Learn how LexisNexis Risk Solutions decreased the time it takes to get new sales reps up to speed and closing sales.
                        </p>
                        <a href='#' className='kbbtn kbbtn--orange  mtt-10'>Learn More</a>
                     </div>
                  </div>

                  <div className='col-sm-6 pa0000'>
                     <div className='pll-100'>
                        <img src="/assets/img/kbnew/Lexisnexis-client-success-story.jpg" alt="Images" />
                     </div>
                  </div>

               </div>
            </div>
         </section>



         <div className="brand-area GlobalClients">
            <div className="container">
               <div className='row'>
                  <div className='col-sm-12 text-center pbb-40'>
                     <h2 className='sectionh ptt-50'>Our Global Clients</h2>
                  </div>
                  <div className='col-sm-12 pbb-40'>
                     <Slider {...settings}>
                        <div key={1}>
                           <img src="assets/img/boston-1.png" alt="Images" />
                        </div>
                        <div key={2}>
                           <img src="assets/img/tcs.png" alt="Images" />
                        </div>
                        <div key={3}>
                           <img src="assets/img/optum.png" alt="Images" />
                        </div>
                        <div key={4}>
                           <img src="assets/img/nthrive.png" alt="Images" />
                        </div>
                        <div key={5}>
                           <img src="assets/img/mcm.png" alt="Images" />
                        </div>
                        <div key={6}>
                           <img src="assets/img/hp.png" alt="Images" />
                        </div>
                        <div key={7}>
                           <img src="assets/img/hero.png" alt="Images" />
                        </div>
                        <div key={8}>
                           <img src="assets/img/hcl.png" alt="Images" />
                        </div>
                        <div key={9}>
                           <img src="assets/img/fA.png" alt="Images" />
                        </div>
                     </Slider>
                  </div>
               </div>
            </div>
         </div>

         <div className="LeadershipResources">
            <div className="container pbb-50">
               <div className='row'>
                  <div className='col-sm-12 text-center pbb-40'>
                     <h2 className='sectionh ptt-50'>Online Leadership Resources</h2>
                     <p className='headingp'>Explore valuable articles, videos, and tools to support your business transformation.</p>
                  </div>

                  <div className='col-sm-3'>
                     <div className='reinner'>
                        <a href='/ebooks'>
                           <img src="/assets/img/kbnew/icon/eBooks.svg" alt="Images" />
                           <h3>eBooks</h3>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-3'>
                     <div className='reinner'>
                        <a href='/white-paper'>
                           <img src="/assets/img/kbnew/icon/accelerate-development.svg" alt="Images" />
                           <h3>White Papers</h3>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-3'>
                     <div className='reinner'>
                        <a href='/blog'>
                           <img src="/assets/img/kbnew/icon/Articles.svg" alt="Images" />
                           <h3>Blog Articles</h3>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-3'>
                     <div className='reinner'>
                        <a href='/podcast'>
                           <img src="/assets/img/kbnew/icon/podcasts.svg" alt="Images" />
                           <h3>Podcasts</h3>
                        </a>
                     </div>
                  </div>

                  <div className='col-sm-12 text-center'>
                  <a href='#' className='kbbtn kbbtn--orange  mtt-10'>View All Resources</a>
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}
