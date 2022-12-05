import React from "react";
import styled from "styled-components";
import LogoImage from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
 max-height: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.text}
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 21px;
  border-radius: 9px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  margin-top: 10px;
  font-weight: 500;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LogoImage} />
          VidTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>

        <Item>
          <ExploreIcon />
          Explore
        </Item>

        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Hr />

        <Item>
          <VideoLibraryIcon />
          Library
        </Item>

        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />

        <Login>
          Sign in to like videos,comment and subscribe.
          <Button>
            <AccountCircleIcon />
            Sign In
          </Button>
        </Login>
        <Hr />
        <Title>Best of VidTube</Title>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>

        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>

        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>

        <Item>
          <MovieCreationIcon />
          Movies
        </Item>

        <Item>
          <ArticleIcon />
          News
        </Item>

        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>

        <Item>
          <FlagIcon />
          Report
        </Item>

        <Item>
          <HelpIcon />
          Help
        </Item>

        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
