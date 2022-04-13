import styled, { css } from "styled-components"
import theme from "theme/index"

const CardContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;
`

const Card = styled.div`
  background: ${theme.colors.white};
  width: 70%;
  min-width: 300px;
  max-width: 993px;
  margin: 0 auto;
  border-radius: 20px;
  height: fit-content;
  border: 2px solid ${theme.colors.orange_light};
  box-shadow: 0px 4px 15px 5px rgba(236, 193, 159, 0.15);
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${theme.resolutions.tablet}) {
    flex-direction: column-reverse;
  }
`

const Title = styled.h4`
  color: ${theme.colors.primary};
  margin: 0;
  font-size: ${theme.fontSizes.secondDesktop};
  @media screen and (max-width: ${theme.resolutions.tablet}) {
    font-size: ${theme.fontSizes.button};
  }
`

const ImageContainer = styled.div`
  width: 496px;
  height: 496px;
  img {
    width: 496px;
    height: 496px;
    border-radius: 0px 18px 18px 0px;
  }

  @media screen and (max-width: ${theme.resolutions.tablet}) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    padding-top: 10px;
    img {
      width: 250px;
      height: 250px;
      border-radius: 18px;
    }
  }
`
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 330px;
  margin-top: 80px;
  @media screen and (max-width: ${theme.resolutions.tablet}) {
    margin-top: 25px;
    gap: 15px;
  }

  @media screen and (max-width: ${theme.resolutions.mobile}) {
    width: 250px;
  }
`
const Option = styled.button<{
  isCorrect?: boolean
  answered: boolean
  selected?: boolean
}>`
  background: ${theme.colors.white};
  text-align: left;
  cursor: pointer;
  border: 2px solid ${theme.colors.orange_background};
  font-family: ${theme.fontFamilies.primary};
  outline: none;
  border-radius: 5px;
  padding: 11px 0 11px 32px;
  &:hover {
    background-color: ${theme.colors.gray};
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
  
  ${props =>
    props.selected &&
    css`
      background-color: ${theme.colors.gray};
    `}

    @media screen and (max-width: ${theme.resolutions.mobile}) {
    padding: 5px 10px;
  }
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 0 0 30px;
  align-items: flex-start;
  @media screen and (max-width: ${theme.resolutions.tablet}) {
    align-items: center;
    padding: 20px 0 0 0;
  }
`

const Timer = styled.div`
  margin-top: 10px;
  p {
    color: ${theme.colors.primary};
  }
  span {
    margin-left: 10px;
  }
  @media screen and (max-width: ${theme.resolutions.tablet}) {
    margin-left: 0;
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
