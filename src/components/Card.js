import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 340px;
  cursor: pointer;
  margin-bottom: 45px;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: black;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  background-color: black;
  border-radius: 50%;
  object-fit: cover;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image />
        <Details>
          <ChannelImage />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Namit Malasi</ChannelName>
            <Info>660,252 views . 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
