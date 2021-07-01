import styled from "styled-components";

export const PageAuth = styled.div`
  aside {
    background: ${ props => props.theme.colors.primary };
    color: ${ props => props.theme.colors.light };

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    
    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: ${ props => props.theme.colors.light };
      opacity: 0.85;
    }

    @media screen and (max-width: 768px) {
      height: unset;
      padding: 3rem 1rem;

      strong {
        margin-top: 0;
      }
    }
  }

  main {
    padding: 0 32px;
    background-color: ${ props => props.theme.colors.background };

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;


    @media screen and (max-width: 768px) {
      height: unset;
      padding: 3rem 1rem;
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
      max-width: 160px;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: ${ props => props.theme.colors.light };
        border: 1px solid ${ props => props.theme.colors.inputBorder };
      }

      button { 
        margin-top: 16px;
      }

      button, input {
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: ${ props => props.theme.colors.lightText };
      margin-top: 16px;

      a {
        color: ${ props => props.theme.colors.secundary };
      }
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${ props => props.theme.colors.google };
    color: ${ props => props.theme.colors.light };

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 14px;
    color: ${ props => props.theme.colors.inputBorder };

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: ${ props => props.theme.colors.inputBorder };
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${ props => props.theme.colors.inputBorder };
      margin-left: 16px;
    }
  }
  .theme-switch {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;