import styled from "styled-components";

const Wrapper = styled.div`
  .forgotpassword {
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
    border-radius: 10px; /* Thêm bo góc cho form */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Thêm bóng cho form */
  }

  h1 {
    text-align: center;
    padding-bottom: 28px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 40px;
    font-size: 30px;
    color: white;
  }

  .des {
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    color: white;

    span{
        font-size: 18px;
        font-weight: 300;
    }
  }

  .input {
    display: flex;
    flex-direction: column;

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
  }

  button.commit {
    background-color: #fbceb5;
    color: black;
    padding: 15px 120px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
      opacity: 50%;
    }
  }

  .goback {
    text-align: center;
    margin-top: 20px;

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
`;

export default Wrapper;
