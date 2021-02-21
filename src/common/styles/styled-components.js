import styled from "styled-components";
import Background from "../images/background.png";

export const PageContainer = styled.main`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 40px;
  background-image: url(${Background});
  background-size: cover;
  background-color: #607f61;
  color: #000000;
  line-height: 1.8;
  font-family: cardo, serif;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
    transition: color 0.4s;
    position: relative;
    white-space: nowrap;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 0%;
      position: absolute;
      height: 1px;
      background-color: #c07e6e;
      transition: width 0.2s ease-in-out;
      left: 0;
    }

    &:hover,
    &:focus {
      color: #c07e6e;

      &::after {
        width: 100%;
      }
    }
    &:active {
      color: #607f61;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: montserrat, sans-serif;
    font-weight: 400;
    margin: 0;
    text-align: center;
  }

  h1 {
    line-height: 1em;
    font-weight: 700;
    font-size: 40px;
  }

  h2 {
    color: #3e3f44;
    font-size: 16px;
    margin: 0 0 0.5em;
  }
`;

export const PageCard = styled.div`
  background-color: #ffffff;
  padding: 40px 100px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ProfileImage = styled.img`
  max-height: 300px;
  display: block;
  margin: 0 auto;
`;

export const SocialList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const SocialItem = styled.li`
  display: inline;
  margin: 0 10px 0 0;
  padding: 0;
  font-size: 28px;
  line-heigth: 20px;

  a {
    padding: 0;
    margin: 0;

    &::after {
      display: none;
    }
  }
`;

export const Text = styled.div`
  max-width: 500px;
`;
