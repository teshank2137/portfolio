import styled from "styled-components";

const StyledScrollIcon = styled.button`
  z-index: 3;
  position: absolute;
  top: 80vh;
  left: 50%;
  transform: translateX(-100%);
  @media (max-width: 768px) {
    top: 73vh;
    transform: translateX(-100%) scale(0.75);
  }
  .container-icon {
    position: absolute;
    width: 24px;
    height: 24px;
  }

  .chevron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  .chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }

  .text {
    display: block;
    margin-top: 75px;
    margin-left: -30px;
    font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0.25;
    animation: pulse 2s linear alternate infinite;
  }

  @keyframes pulse {
    to {
      opacity: 1;
    }
  }
`;

const ScrollIcon = () => {
  return (
    <StyledScrollIcon
      onClick={() =>
        document.getElementById("About").scrollIntoView({ behavior: "smooth" })
      }
    >
      <div className="container-icon">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="text">Scroll down</span>
      </div>
    </StyledScrollIcon>
  );
};
export default ScrollIcon;
