import React from "react";
import styled from "styled-components";

export default function CFemailer(props) {
  const ButtonWrapper = styled.a`
    position: fixed;
    ${props.position === "left" &&
    `
      bottom: 20px;
      left: 20px;
    `}

    ${(props.position === "right" ||
      props.position === "" ||
      props.position === undefined) &&
    `
      bottom: 20px;
      right: 20px;
    `}

    ${(props.position === "center" || props.position === "middle") &&
    `
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    `}

    padding: 20px;
  `;
  console.log(props.position);
  const Button = styled.div`
    height: 60px;
    line-height: 60px;
    width: 60px;
    font-size: 1.75em;
    font-weight: bold;
    ${(props.shape === "round" ||
      props.shape === "" ||
      props.shape === undefined) &&
    `
      border-radius: 50%;
    `}
    ${(props.shape === "rect" ||
      props.shape === "rectangle" ||
      props.shape === "square") &&
    `
      width: 100px;
      border-radius:5px;
      font-size: 2em;

    `}
    background-color: ${props.color};
    color: white;
    text-align: center;
    cursor: pointer;
  `;

  return (
    <ButtonWrapper onClick={props.onClick}>
      <Button>
        <i className="far fa-envelope"></i>
      </Button>
    </ButtonWrapper>
  );
}
