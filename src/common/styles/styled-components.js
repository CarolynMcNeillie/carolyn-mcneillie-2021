import styled from "styled-components";
import Background from "../../images/background.png";

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

    span {
      position: absolute;
      left: 2000000px;
      opacity: 0;
      font-size: 0;
    }

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
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
    &:focus {
      outline: 2px solid #c07e6e;
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
    margin: 20px 0;

    @media only screen and (max-width: 650px) {
      font-size: 30px;
    }
  }

  h2 {
    color: #3e3f44;
    font-size: 16px;
    margin: 0 0 0.5em;

    @media only screen and (max-width: 650px) {
      font-size: 14px;
    }
  }
`;

export const PageCard = styled.div`
  background-color: #ffffff;
  padding: 40px 100px;
  max-width: 1000px;
  margin: 0 auto;

  @media only screen and (max-width: 650px) {
    padding: 40px 20px;
  }
`;

export const ProfileImage = styled.div`
  width: 218px;
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
  border-top: 1px solid #e8eae3;
  border-bottom: 1px solid #e8eae3;
  margin: 20px 0;
`;
