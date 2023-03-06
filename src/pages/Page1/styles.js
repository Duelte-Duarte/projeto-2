import styled from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  max-width: 1400px;
  @media screen and (min-width: 600px) {
    align-items: flex-start;
    display: flex;
  }
`;

export const Br = styled.div`
  height: 5px;
`;

export const Box1 = styled.div`
  background-color: #f1f1f1;
  border-radius: 50px;
  text-align: center;
  color: white;
  height: 20px;
`;

export const BoxItem = styled.div`
  background-color: #009688;
  border-radius: 50px;
  text-align: center;
  height: 20px;
  color: white;
  width: ${(props) => props.percent}%;
`;

export const Section = styled.div`
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  background-color: white;
  padding: 30px 20px;
  margin: 20px;

  h1 {
    display: flex;
    color: #757575;
    margin: 10px 0px;
    margin-top: 0px;
  }

  p {
    display: flex;
    color: #009688;
    align-items: center;
  }

  svg {
    color: #009688;
    margin-right: 16px;
  }

  mark {
    border-radius: 5px;
    background-color: #009688;
    padding-bottom: 3px;
    padding-inline: 6px;
    padding-top: 0px;
    font-weight: 500;
    margin: 0px 6px;
    color: white;
  }

  hr {
    width: 100%;
    border-top: 0px;
    border-bottom: 0.1px solid #f1f1f1;
  }
  
  &:not(.stat) {
    h2 {
      color: #757575;
      font-weight: 600;
      font-size: 20px;
    }
  }

  &.stat {

    img {
      width: 100%;
      height: 300px;
    }

    p {
      color: #757575;
    }

    h2 {
      font-weight: 500;
    }

    @media screen and (min-width: 600px) {
      margin-right: 0px;
      width: 450px;
    }

  }

  .image-header {
    position: relative;
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-top: -30px;
    img {
      object-fit: cover;
      height: auto;
      width: 100%;
    }
    h2 {
      position: absolute;
      bottom: 20px;
      margin: 0px;
      left: 20px;
    }
  }

`;

export const Footer = styled.div`
  height: 20vh;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  background-color: #009688;
  color: white;

  svg {
    margin: 0px 1px;
    &:hover {
      opacity: 0.6;
    }
  }
`;
