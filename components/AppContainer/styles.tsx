import styled, { css } from "styled-components"
import theme from "theme/index"

const StartButton = styled.button<{ active: boolean }>`
  display: flex;
  margin: 300px auto;
  outline: none;
  border: 2px solid transparent;
  padding: 20px 25px;
  font-family: ${theme.fontFamily};
  font-size: 30px;
  border-radius: 10px;

  @media screen and (max-width: 700px) {
    border-radius: 10px;
    font-size: 20px;
  }

  ${props =>
    props.active
      ? css`
          background-color: ${theme.colors.orange};
          cursor: pointer;
          &:hover {
            border: 2px solid ${theme.colors.orange_light};
            box-shadow: 0px 4px 10px 5px rgba(236, 193, 159, 0.1);
          }
        `
      : css`
          opacity: 0.9;
          border: 2px solid gray;
        `}
`

export default StartButton
