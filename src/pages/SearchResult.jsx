import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductAll from "./ProductAll";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  > h4 {
    text-align: center;
    margin: 2rem 0;
    font-size: 1.5rem;
    > span {
      color: var(--main-color);
      font-weight: 600;
      font-size: 1.75rem;
    }
  }
`;

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  return (
    <Container>
      <h4>
        <span>{q}</span>의 검색결과입니다
      </h4>
      <ProductAll />
    </Container>
  );
};

export default SearchResult;
