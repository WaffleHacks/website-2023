import { Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CrewFrame = () => {
  return (
    <div id="crew" className="bg-white py-8 px-0 md:text-left flex flex-col items-center">
      <div className="w-full" style={{ maxWidth: 'min(100vw, 80rem)' }}>
        <h1 className="text-3xl md:text-left font-light pl-8">Meet your flight captains and crew :&#41;</h1>
      </div>
      <Swiper
        slidesPerView={'auto'}
        navigation={true}
        mousewheel={true}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Navigation]}
        className="mySwiper w-screen"
      >
        {/* Jendy */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44">
            <img src="/images/Jendy.png" alt="Jendy" className="w-36" />
            <span className="text-center">
              <b>Jendy</b>
            </span>
          </div>
        </SwiperSlide>
        {/* Kevin */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44">
            <img src="/images/Kevin.png" alt="Kevin" className="w-36" />
            <span className="text-center">
              <b>Kevin</b>
            </span>
          </div>
        </SwiperSlide>
        {/* Miracle */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44">
            <img src="/images/Miracle.png" alt="Miracle" className="w-36" />
            <span className="text-center">
              <b>Miracle</b>
            </span>
          </div>
        </SwiperSlide>
        {/* Samihah */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44">
            <img src="/images/Samihah.png" alt="Samihah" className="w-36" />
            <span className="text-center">
              <b>Samihah</b>
            </span>
          </div>
        </SwiperSlide>
        {/* Alex */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44 h-52">
            <img src="/images/Alex.png" alt="Alex" className="w-36" />
            <span className="text-center">
              <b>Alex</b>
            </span>
          </div>
        </SwiperSlide>
        {/* Arthi */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44">
            <img src="/images/Arthi.png" alt="Arthi" className="w-36" />
            <span className="text-center">
              <b>Arthi</b>
            </span>
          </div>
        </SwiperSlide>
        {/* Bisman */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44">
            <img src="/images/Bisman.png" alt="Bisman" className="w-36" />
            <span className="text-center">
              <b>Bisman</b>
            </span>
          </div>
        </SwiperSlide>
        {/* Ethan */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44">
            <img src="/images/Ethan.png" alt="Ethan" className="w-36" />
            <span className="text-center">
              <b>Ethan</b>
            </span>
          </div>
        </SwiperSlide>
        {/* Nathan */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44">
            <img src="/images/Nathan.png" alt="Nathan" className="w-36" />
            <span className="text-center">
              <b>Nathan</b>
            </span>
          </div>
        </SwiperSlide>

        {/* Jasmine */}
        <SwiperSlide>
          <div className="flex flex-col items-center w-44">
            <img src="/images/Jasmine.png" alt="Jasmine" className="w-36" />
            <span className="text-center">
              <b>Jasmine</b>
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CrewFrame;
