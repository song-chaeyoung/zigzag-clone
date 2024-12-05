import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaRegSadTear } from "react-icons/fa";

const NoItemContainer = styled.div`
  text-align: center;
  margin: 3rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  color: #666;
`;

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  if (productList.length === 0)
    return (
      <NoItemContainer>
        <FaRegSadTear />
        상품이 없습니다
      </NoItemContainer>
    );

  return (
    <Container>
      <Row>
        {productList.map((it, idx) => (
          <Col key={idx} lg={6}>
            <ProductCard key={idx} item={it} />
          </Col>
        ))}
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default ProductAll;
