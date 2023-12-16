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
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <>
         <Head>
            <title>Leadership Training in India | Leadership Training Programs - Blanchard</title>

         </Head>



         <section className='bannehome'>
            <img src="/assets/img/im1.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im2.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im3.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im4.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im5.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im6.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im7.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im8.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im9.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im10png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im11.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im12.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im13.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im14.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im5.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im6.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im17.png" alt="Images" />
         </section>
         <section className='bannehome'>
            <img src="/assets/img/im18.png" alt="Images" />
         </section> 

         <div className='fixxx'>
           <div>
            <a className='blink' href='https://exly.co/SLjPXJ'>Join Now सिर्फ 555/- में</a>
           </div>
         </div>
         <div className='bbbv'>
            .
            <br></br>
            .
            <br></br>
         </div>

      </>
   )
}
