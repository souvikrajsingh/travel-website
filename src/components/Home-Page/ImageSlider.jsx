import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './imageSlider.css';

function imageSlider() {
  return (
    <>
      <div className="card-slider-div">
        <main>
          <div>
            <span>discover</span>
            <h1>TravelHike Exclusives</h1>
            <hr></hr>
            <p>Embark on a journey like never before! Our exclusive tour packages redefine travel, offering enchanting experiences tailored just for you. Dive into luxury, adventure, and cultural immersion. Elevate your wanderlust with TravelHike – Your Passport to Extraordinary! </p>
            <a href="#">Book a Travel</a>
          </div>

          {/* Swiper component */}
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1560: {
                slidesPerView: 3,
              },
            }}
          >
            {/* Swiper slides */}
            <SwiperSlide>
              <div className="swiper-slide swiper-slide--one">
                <h2>Kashmir</h2>
                <p>Himalayan Oasis: Kashmir, captivates with stunning mountain passes, monasteries, and adventure galore. A surreal experience for thrill-seekers and nature enthusiasts.</p>
                <a href="" target="_blank">explore</a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide swiper-slide--two">
                <h2>Jaipur</h2>
                <p>Regal Splendor: Jaipur, the Pink City, is a royal tapestry of palaces, markets, and the iconic Hawa Mahal. Immerse yourself in Rajasthan's rich cultural heritage.</p>
                <a href="" target="_blank">explore</a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide swiper-slide--three">
                <h2>Goa</h2>
                <p>Tropical Bliss: Goa, a coastal haven, beckons with pristine beaches, lively nightlife, and a unique blend of Portuguese charm. Beyond the shores, discover vibrant markets and spice plantations.</p>
                <a href="" target="_blank">explore</a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide swiper-slide--four">
                <h2>Rishikesh</h2>
                <p>Yoga Retreat: Rishikesh, nestled along the Ganges, is a spiritual retreat offering yoga, adventure, and the iconic Laxman Jhula. Find tranquility amidst the Himalayas.</p>
                <a href="" target="_blank">explore</a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide swiper-slide--five">
                <h2>Kerala</h2>
                <p>Paradise: Kerala, in the Western Ghats, enchants with misty hills, serene lakes, and lush tea gardens. A haven for nature lovers seeking a peaceful escape.</p>
                <a href="" target="_blank">explore</a>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Add Pagination */}
          <div className="swiper-pagination"></div>

          <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" alt="" className="bg"></img>
          <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg2"></img>
        </main>

        
      </div>
    </>

  );
}

export default imageSlider;