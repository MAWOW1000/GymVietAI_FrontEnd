import styled from "styled-components";

const Wrapper = styled.div`
  .register {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }

  form {
    background-color: transparent;
    padding: 40px;
    width: 100%;
    max-width: 420px;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    padding-bottom: 30px;
    margin-top: 0;
    font-size: 30px;
    color: white;
  }

  .login-link {
    p {
      font-size: 28px;
      font-weight: 100;
      text-align: center;
      margin-bottom: 20px;
      color: white;
    }

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #0056b3;
        text-decoration: underline;
      }
    }
  }

  .input {
    display: flex;
    flex-direction: column;
  }

  input {
    opacity: 50%;
    padding: 14px;
    margin-bottom: 23px;
    border-radius: 20px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: black; /* Chữ không bị làm mờ */
    &::placeholder {
      color: black; /* Màu cho chữ placeholder */
    }
  }

  button.commit {
    background-color: #fbceb5;
    color: black;
    padding: 17px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
      opacity: 50%;
    }
  }
`;

export default Wrapper;
