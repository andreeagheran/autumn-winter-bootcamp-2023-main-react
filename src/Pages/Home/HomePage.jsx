import React from "react";
import { HomeContainer, HomeBanner } from "./styled";
import { ReactComponent as FirstImg } from "../../assets/img/destructuring.svg";
import { ReactComponent as SecondImg } from "../../assets/img/WebPage_logo.svg";

import Button from "../../Components/Button/Button";

const HomePage = () => {
  const navigate = () => {
    window.location.pathname = '/application-form';
  }

  return (
    <HomeContainer>
      <HomeBanner>
        <FirstImg />
        <SecondImg />
      </HomeBanner>
      <Button onClick={() => navigate()}>Join Us</Button>
    </HomeContainer>
  )
}

export default HomePage;