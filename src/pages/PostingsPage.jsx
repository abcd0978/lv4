import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/modules/postSlice";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Loading from "../components/Loading";
function PostingsPage() {
  const ref = useRef(null);
  const { posts, loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const increasePage = useCallback(() => {
    setPage(page + 1);
  });
  const [observe, unobserve] = useInfiniteScroll(increasePage);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(
        fetchPosts({
          page: page,
          ob: () => observe(ref.current),
          unob: () => unobserve(ref.current),
        })
      );
    };

    fetchData();
  }, [page]);
  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <StContainer>
          {posts?.map((post) => (
            <Card id={post.id} name={post.name} title={post.title} />
          ))}
        </StContainer>
      )}
      <div ref={ref}>{loading && <Loading />}</div>
    </div>
  );
}
const StContainer = styled.div`
  align-items: center;
`;

export default PostingsPage;
