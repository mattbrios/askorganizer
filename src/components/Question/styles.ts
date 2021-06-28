import styled from "styled-components";

export const QuestionContainer = styled.div`
  background: ${ props => props.theme.colors.bgQuestion};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }
  
  &.highlighted {
    background: ${ props => props.theme.colors.bgHighlighted};
    border: 1px solid ${ props => props.theme.colors.primary};
    
    footer .user-info span {
      color: ${ props => props.theme.colors.questionText};
    }
  }
  
  &.answered {
    background: ${ props => props.theme.colors.bgAnswered };
  }

  p {
    color: ${ props => props.theme.colors.questionText };
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

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
        color: ${ props => props.theme.colors.lightText };
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${ props => props.theme.colors.lightText };
        gap: 8px;

        &.liked {
          color: ${ props => props.theme.colors.primary };

          svg path {
            stroke: ${ props => props.theme.colors.primary };;
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;