import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";
const initialState = {
  loading: true,
  error: "",
  posts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "FETCH_FAIL":
      return {
        loading: false,
        error: "There is no posts",
        posts: [],
      };
    default:
      return state;
  }
};

function HomeComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [postPerPage, setPostPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(currentPage);

  // Fetch Data
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
        });
      }
    };
    fetch();
  }, []);

  // Get current posts
  const indexLastPost = postPerPage * currentPage;
  const indexFirstPost = indexLastPost - postPerPage;
  const currentPosts = state.posts.slice(indexFirstPost, indexLastPost);

  // Paginate handler - based on the page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPageNumber(pageNumber);
  };

  return (
    <>
      <h1 className="m-4">Home Component</h1>
      <h4 className="m-4">Current Page: {pageNumber}</h4>
      <Posts loading={state.loading} posts={currentPosts} />
      <Pagination
        loading={state.loading}
        postPerPage={postPerPage}
        totalPosts={state.posts.length}
        paginate={paginate}
      />
    </>
  );
}

export default HomeComponent;
