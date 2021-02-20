import styled from "styled-components";
import Background from "../images/background.png";

export const PageContainer = styled.main`
  min-height: 100vh;
  padding: 100px;
  background-image: url(${Background});
  background-size: cover;
  background-color: #607f61;
  color: #898989;

  a {
    text-decoration: none;
    color: #000;
    transition: color 0.4s;

    &:hover,
    &:focus {
      color: #c07e6e;
    }
    &:active {
      color: #607f61;
    }
  }
`;

export const PageCard = styled.div`
  background-color: #ffffff;
  padding: 40px 100px 80px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ProfileImage = styled.img`
  max-height: 60vh;
`;
