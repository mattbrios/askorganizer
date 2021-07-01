import styled from "styled-components";

export const PageRoom = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid ${ props => props.theme.colors.headerLine};

    .content {
      // max-width: 1120px;
      /* margin: 0 auto; */
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        text-decoration: none;
      }

      .logo {
        height: 45px;
      }

      > div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;

        button {
          margin-top: 1rem;
        }
      }
    }
  }

  main {
    // max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: ${ props => props.theme.colors.questionText };
      }

      span {
        margin-left: 16px;
        background: ${ props => props.theme.colors.secundary };
        border-radius: 9999px;
        padding: 8px 16px;
        color: ${ props => props.theme.colors.light };
        font-weight: 500;
        font-size: 14px;
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
        
        span {
          margin: 0;
          margin-top: 1rem;
        }
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: ${ props => props.theme.colors.light };
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: ${ props => props.theme.colors.questionText };
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: ${ props => props.theme.colors.lightText };
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: ${ props => props.theme.colors.primary };
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 32px;
    }
  }
  .theme-switch {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;