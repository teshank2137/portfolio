import styled from "styled-components";
import { type, screenSize } from "../utils";

const StyledCard = styled.div`
  width: 70%;
  background-color: #ffffff0a;
  border-radius: 0.75rem;
  background: linear-gradient(145deg, #111111, #141414);
  box-shadow: 25px 25px 73px #080808, -25px -25px 73px #1e1e1e;
  -webkit-box-shadow: 25px 25px 73px #080808, -25px -25px 73px #1e1e1e;
  border: solid #ffffff22 2px;
  z-index: -2;
  h2,
  h3,
  h4 {
    margin: 0;
    padding: 0;
  }
  .card {
    padding: 1rem;
  }
  .card-title {
    text-align: center;
    font-size: ${type.cardTitle};
    padding: 1rem;
  }

  .card-body {
    padding-top: 0.5rem;
  }
  .card-compName {
    font-size: ${type.cardBody};
  }
  .card-description {
    font-size: ${type.timeText};
  }
  @media only screen and (max-width: ${screenSize.mobile}) {
    box-shadow: 15px 15px 53px #080808, -15px -15px 53px #1e1e1e;
    width: 90%;
    .card {
      padding-top: 0;
    }
    .card-title {
      font-size: ${type.cardTitleMobile};
    }
    .card-compName {
      font-size: ${type.cardBodyMobile};
    }
    .card-description {
      font-size: ${type.cardBodyMobile};
    }
    .card-timestamp {
      font-size: ${type.timeTextMobile};
    }
  }
`;

export default StyledCard;
