import styled, { css } from "styled-components"
import theme from "theme/index"

const CardContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;
`

const Card = styled.div`
  background: ${theme.colors.white};
  width: 70%;
  margin: 0 auto;
  border-radius: 20px;
  height: 500px;
  border: 2px solid ${theme.colors.orange_light};
  box-shadow: 0px 4px 15px 5px rgba(236, 193, 159, 0.15);
  display: flex;
  justify-content: space-between;
`

const Title = styled.h4`
  color: ${theme.colors.primary};
  margin: 0;
  font-size: ${theme.fontSizes.secondDesktop};
`

const ImageContainer = styled.div`
  img {
    width: 496px;
    height: 496px;
    border-radius: 0px 18px 18px 0px;
  }
`
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 330px;
  margin-top: 80px;
`
const Option = styled.button<{ isCorrect?: boolean; answered: boolean }>`
  background: ${theme.colors.white};
  text-align: left;
  cursor: pointer;
  border: 2px solid ${theme.colors.orange_background};
  font-family: ${theme.fontFamilies.primary};
  outline: none;
  border-radius: 5px;
  padding: 11px 0 11px 32px;
  &:hover {
    background-color: ${theme.colors.orange_background};
  }
  ${props =>
    props.answered &&
    props.isCorrect &&
    css`
      border: 2px solid ${theme.colors.green};
    `}

  ${props =>
    props.answered &&
    !props.isCorrect &&
    css`
      border: 2px solid ${theme.colors.red};
    `}
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 0 0 30px;
  align-items: flex-start;
`

const Timer = styled.div`
  margin-top: 10px;
  p {
    color: ${theme.colors.primary};
  }
  span {
    margin-left: 10px;
  }
`

export {
  Card,
  ImageContainer,
  CardContainer,
  Title,
  Option,
  LeftContainer,
  OptionsContainer,
  Timer,
}
