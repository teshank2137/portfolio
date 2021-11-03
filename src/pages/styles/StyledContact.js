import styled from "styled-components";
import { type, screenSize } from "../../utils";
const StyledContact = styled.div`
  height: 100%;
  .note {
    color: #fff8;
    font-style: italic;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
  .contact-title {
    font-size: ${type.webTitle};
    padding: 2.25rem;
    padding-right: 0;
  }
  .contact-contents {
    margin-left: 2.25rem;
    display: flex;
  }
  .contact-3d {
    width: 50%;
    height: 100vh;
  }
  .contact-form {
    width: 50%;
    input,
    textarea {
      padding: 0.75rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: ${type.secondaryHeader};
      border-radius: 5px;
      background: #131313;
      border: #ffffff11 1px solid;
      box-shadow: 6px 6px 15px #080808, -6px -6px 15px #1e1e1e;
      -webkit-box-shadow: 6px 6px 15px #080808, -6px -6px 15px #1e1e1e;

      color: #fffa;
      outline: none;

      margin-top: 0.75rem;
    }
    .form-group {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
    }
    textarea {
      width: 100%;
    }
    .btn-grp {
      display: flex;
      justify-content: end;
    }
    input:focus,
    textarea:focus {
      border: #fff4 1px solid;
    }
    .btn-submit {
      font-size: 1rem;
      color: #fffe;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    .btn-submit:disabled {
      cursor: default;
      color: #ffffff33;
      border: #ffffff11 1px solid;
      box-shadow: none;
      -webkit-box-shadow: none;
    }
  }
  @media (max-width: ${screenSize.mobile}) {
    .note {
      font-size: 0.75rem;
    }
    .contact-title {
      font-size: ${type.webTitleMobile};
      padding: 1.1rem;
      padding-top: 2rem;
    }
    .contact-contents {
      margin: 0 1.1rem;
      flex-direction: column;
    }
    .contact-3d {
      width: 100%;
      height: auto;
      padding: 0.5rem;
    }
    .contact-form {
      width: 100%;

      .form-group {
        flex-direction: column;
        input,
        textarea {
          font-size: ${type.secondaryHeaderMobile};

          box-shadow: 4px 4px 18px #080808, -4px -4px 18px #1e1e1e;
          -webkit-box-shadow: 4px 4px 18px #080808, -4px -4px 18px #1e1e1e;
        }
      }
      .btn-submit {
        border-radius: 0.5rem;
        font-size: 0.75rem;
      }
    }
  }
`;
export default StyledContact;
