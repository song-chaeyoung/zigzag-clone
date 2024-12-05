import React from "react";
import Slide from "../components/Slide";
import ProductAll from "./ProductAll";
import styled from "styled-components";
import { PiListLight } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Category = styled.div`
  padding: 1rem;
  .category_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    span:first-child {
      font-size: 1.5rem;
      min-height: 3rem;
      min-width: 3rem;
      color: #000;
      background-color: #f5f6f8;
      /* padding: 0.5rem; */
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        width: 3.2rem;
        height: 3.2irem;
        object-fit: cover;
      }
    }
    span:last-child {
      font-size: 0.8rem;
      color: #000;
    }
  }
`;

const CategoryList = [
  { icon: <PiListLight />, title: "카테고리" },
  { icon: <img src="/top.png" alt="상의" />, title: "상의" },
  { icon: <img src="/onepiece.png" alt="원피스" />, title: "원피스" },
  { icon: <img src="/pants.png" alt="바지" />, title: "바지" },
  { icon: <img src="/skirt.png" alt="스커트" />, title: "스커트" },
  { icon: <img src="/outer.png" alt="아우터" />, title: "아우터" },
  { icon: <img src="/bag.png" alt="가방" />, title: "가방" },
  { icon: <img src="/shoes.png" alt="슈즈" />, title: "슈즈" },
  { icon: <img src="/fashion.png" alt="패션잡화" />, title: "패션잡화" },
  { icon: <img src="/jewelry.png" alt="쥬얼리" />, title: "쥬얼리" },
  { icon: <img src="/swimwear.png" alt="수영복" />, title: "수영복" },
  { icon: <img src="/beauty.png" alt="뷰티" />, title: "뷰티" },
];

const Home = () => {
  return (
    <div>
      <Slide />
      <Category>
        <Swiper slidesPerView={6} className="mySwiper">
          {CategoryList.map((it) => (
            <SwiperSlide key={it.title}>
              <div className="category_item">
                <span>{it.icon}</span>
                <span>{it.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Category>
      <ProductAll />
    </div>
  );
};

export default Home;
