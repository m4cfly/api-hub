import styled from 'styled-components'
import Navbar from './NavBar'

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const Content = styled.main`
  width: 100%;
  padding: 2rem 0;
`

const Layout = ({ children }) => {
  return (
    <MainContainer>
      <Navbar />
      <ContentWrapper>
        <Content>
          {children}
        </Content>
      </ContentWrapper>
    </MainContainer>
  )
}

export default Layout