import styled from "styled-components"
import theme from "theme/index"

const ResultsContainer = styled.div`
  background-color: ${theme.colors.white};
  width: 30%;
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
  box-shadow: 0px 4px 15px 5px rgba(236, 193, 159, 0.15);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${theme.resolutions.tablet}) {
    width: 40%;
  }

  @media screen and (max-width: ${theme.resolutions.mobile}) {
    width: 60%;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;

  p {
    font-size: ${theme.fontSizes.secondDesktop};
    color: ${theme.colors.primary};
    margin: 0;
  }
`

const Answer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px 5px;
`

const Send = styled.button`
  border: none;
  outline: none;
  background-color: ${theme.colors.orange};
  color: ${theme.colors.primary};
  font-family: ${theme.fontFamilies.primary};
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${theme.colors.orange_background}
  }
`

export {
    ResultsContainer,
    Content,
    Send,
    Answer
}
