import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    display: flex;
    gap: 40px;
  }

  .circle {
    width: 20px;
    height: 20px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    animation: bounce 0.6s infinite ease-in-out;
  }

  .circle:nth-child(2) {
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;

export default Loader;
