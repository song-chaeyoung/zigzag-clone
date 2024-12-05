import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";

const SlideItem = styled.div`
  position: relative;
  max-width: 568px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  > img {
    border-radius: 1rem;
    width: 100%;
    object-fit: cover;
  }
  .slide_text {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    white-space: nowrap;
    > h5 {
      font-size: 2rem;
      line-height: 1.3;
      /* font-weight: 700; */
    }
    > p {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      line-height: 1.3;
    }
  }
`;

const Slide = () => {
  const [slideData, setSlideData] = useState([]);

  const fetchSlideData = async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/song-chaeyoung/zigzag-clone/slide"
    );
    const json = await data.json();
    setSlideData(json);
  };

  useEffect(() => {
    fetchSlideData();
  }, []);
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      autoplay={{ delay: 6000 }}
      loop={true}
      className="mySwiper"
    >
      {slideData.map((item) => (
        <SwiperSlide key={item.id}>
          <SlideItem>
            <img src={item.img} alt={item.id} />
            <div className="slide_text">
              {item.title1 && <h5>{item.title1}</h5>}
              {item.title2 && <h5>{item.title2}</h5>}
              {item.desc && <p>{item.desc}</p>}
            </div>
          </SlideItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
