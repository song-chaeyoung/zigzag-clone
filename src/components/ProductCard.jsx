import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  .title {
    padding-top: 3px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price {
    font-weight: 600;
    font-size: 18px;
  }
`;

const Img = styled.img`
  /* width: 250px; */
  /* width: 270px; */
  height: 270px;
  min-height: 250px;
  min-width: 250px;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const ProductCard = ({ item }) => {
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(item?.price);

  const nevigate = useNavigate();
  const showDetail = () => {
    nevigate(`product/${item.id}`);
  };

  return (
    <>
      <Wrapper onClick={showDetail}>
        <Img src={item?.img} />
        <div className="title">{item && item?.title}</div>
        <div className="price">{formattedPrice}</div>
        <div>{item.new && item?.new === true ? "신제품" : "이벤트상품"}</div>
      </Wrapper>
    </>
  );
};

export default ProductCard;
