import styled from "styled-components"
import theme from "theme/index"

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-end;
  @media screen and (max-width: ${theme.resolutions.tablet}) {
    gap: 10px;
  }
`

const Title = styled.h1`
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.title};
  margin: 0;
  @media screen and (max-width: ${theme.resolutions.tablet}) {
    font-size: ${theme.fontSizes.secondDesktop};
  }
`

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.gray};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${theme.resolutions.tablet}) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: ${theme.resolutions.mobile}) {
    width: 35px;
    height: 35px;
  }
`

const Connect = styled.button`
  border-radius: 5px;
  outline: none;
  background: ${theme.colors.orange_light};
  font-family: ${theme.fontFamilies.primary};
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  gap: 10px;
  cursor: pointer;
  &:hover {
    border: 2px solid ${theme.colors.orange};
    box-shadow: 0px 0px 10px 5px rgba(236, 192, 159, 0.225);
  }

  img {
    width: 50px;
    height: 50px;
  }

  p {
    margin: 0;
    font-size: ${theme.fontSizes.secondDesktop};
  }

  @media screen and (max-width: ${theme.resolutions.tablet}) {
    img {
      width: 28px;
      height: 28px;
    }
    padding: 5px 10px;
    p {
      font-size: ${theme.fontSizes.button};
    }
  }

  @media screen and (max-width: ${theme.resolutions.mobile}) {
    p {
      display: none;
    }
  }
`

const Balance = styled.p`
  color: ${theme.colors.white};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  width: 100%;
`

export {
  Navigation,
  Title,
  ImageContainer,
  LogoContainer,
  Connect,
  Balance,
  Container,
}
