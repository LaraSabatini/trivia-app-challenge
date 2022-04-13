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

const Modal = styled.div`
  position: absolute;
  z-index: 10;
  background: ${theme.colors.white};
  width: 330px;
  border-radius: 10px;
  padding: 20px 15px;
  top: 150px;
  left: 45px;
  box-shadow: 0px 4px 15px rgba(40, 42, 54, 0.5);
`

const Title = styled.h5`
  font-size: ${theme.fontSizes.mainButton};
  color: ${theme.colors.orange_notification};
  margin: 0;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background: none;
    border: none;
    outline: none;
  }
`

const Description = styled.div`
  margin: 0;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.button};

  a {
    color: ${theme.colors.orange_notification}
  }
`

export {StartButton, Modal, Description, Title}