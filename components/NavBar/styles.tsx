import styled from "styled-components"
import theme from "theme/index"

const Navigation = styled.nav`
    display: flex;
    gap: 30px;
    align-items: flex-end;
    margin: 25px 25px;
`

const Title = styled.h1`
    color: ${theme.colors.gray};
    font-size: ${theme.fontSizes.title};
    margin: 0;
`

const ImageContainer = styled.div`
    width: 112px;
    height: 112px;
    background: ${theme.colors.gray};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
    }
`

export {
    Navigation,
    Title,
    ImageContainer
}