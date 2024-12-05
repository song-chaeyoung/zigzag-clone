const getProduct = (searchQuery) => {
  return async (dispatch) => {
    // const url = `https://my-json-server.typicode.com/song-chaeyoung/musinsa-mall/products?q=${searchQuery}`;
    const url = `https://my-json-server.typicode.com/song-chaeyoung/zigzag-clone/products?q=${searchQuery}`;
    // const url = "./db.json";
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODECT_SUCESS", payload: { data: data } });
  };
};

export const productAction = { getProduct };
