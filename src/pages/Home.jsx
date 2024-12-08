import styled from 'styled-components'

const HomeContainer = styled.div`
    text-align: center;
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 15px;
    }
`

const Logo = styled.img`
    max-width: 500px;
    max-height: 400px;
    height: auto;
    margin: 2rem 0;

    @media (max-width: 768px) {
        max-width: 200px;
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
            <Logo src="/Luigi's Pizzeria.png" alt="API Hub Logo" />
            <Title>Welcome to the Pizza API</Title>
            <Description>
                Made by: David, Jenny, Nicklas
            </Description>
        </HomeContainer>
    )
}

export default Home