import React from "react";
import styled from "styled-components";

export default function CFemailer(props) {
  const ButtonWrapper = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 20px;
  `;

  const Button = styled.div`
    height: 60px;
    line-height: 60px;
    width: 60px;
    font-size: 1.75em;
    font-weight: bold;
    border-radius: 50%;
    background-color: ${props.color};
    color: white;
    text-align: center;
    cursor: pointer;
  `;

  return (
    <ButtonWrapper onClick={props.onClick}>
      <Button>
        <i class="far fa-envelope"></i>
      </Button>
    </ButtonWrapper>
  );
}
