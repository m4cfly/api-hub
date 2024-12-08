import styled from 'styled-components'

const HomeContainer = styled.div`
  text-align: center;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Logo = styled.img`
  width: 300px;
  height: 300px;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 1rem 0;
  }
`

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const Description = styled.p`
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const Home = () => {
  return (
    <HomeContainer>
      <Logo src="/Screenshot 2024-12-07 204401.png" alt="API Hub Logo" />
      <Title>Welcome to API Hub</Title>
      <Description>
        Your central location for API documentation and resources. 
        Explore our endpoints and learn about our vision for the future.
      </Description>
    </HomeContainer>
  )
}

export default Home