import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));

    // const url = `https://my-json-server.typicode.com/song-chaeyoung/musinsa-mall/products?q=${searchQuery}`;
    // const response = await fetch(url);
    // const data = await response.json();
    // setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

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
