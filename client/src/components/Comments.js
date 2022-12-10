import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  outline: none;
  padding: 5px;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" />
        <Input placeholder="add a commnet..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
