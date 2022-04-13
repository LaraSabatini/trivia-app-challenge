import styled, { css } from "styled-components"
import theme from "theme/index"

const StartButton = styled.button<{ active: boolean }>`
  display: flex;
  margin: 170px auto;
  outline: none;
  border: 2px solid transparent;
  padding: 20px 25px;
  font-family: ${theme.fontFamilies.primary};
  font-size: ${theme.fontSizes.mainButton};
  border-radius: 10px;

  @media screen and (max-width: 700px) {
    border-radius: 10px;
    font-size: ${theme.fontSizes.button};
  }

  ${props =>
    props.active
      ? css`
          background-color: ${theme.colors.orange};
          cursor: pointer;
          &:hover {
            border: 2px solid ${theme.colors.orange_light};
            box-shadow: 0px 0px 10px 5px rgba(236, 192, 159, 0.326);
          }
        `
      : css`
          opacity: 0.9;
          border: 2px solid gray;
        `}
`

export default StartButton
