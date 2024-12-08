import styled from 'styled-components'
import EndpointTable from '../components/EndpointTable'

const EndpointsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`

const Description = styled.p`
  margin-bottom: 2rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`

const Endpoints = () => {
  return (
    <EndpointsContainer>
      <Title>API Endpoints</Title>
      <Description>
        Below you'll find all available endpoints for our API. 
        Each endpoint includes method type, URL, request/response format, and possible errors.
      </Description>
      <EndpointTable />
    </EndpointsContainer>
  )
}

export default Endpoints