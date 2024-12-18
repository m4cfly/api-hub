import styled from 'styled-components'

const HomeContainer = styled.div`
    text-align: center;
    padding: 0 20px;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        padding: 0 15px;
    }
`;

const Logo = styled.img`
    max-width: 500px;
    max-height: 400px;
    height: auto;
    margin: 2rem 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 768px) {
        max-width: 200px;
        margin: 1rem 0;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
`;

const Title = styled.h1`
    color: #333;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    &:hover {
        color: #4CAF50; /* Green color when hovered */
    }
`;

const Description = styled.p`
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    &:hover {
        color: #333; /* Darker color on hover */
    }
`;

const Home = () => {
    return (
        <HomeContainer>
            <Logo src="/Luigi's Pizzeria.png" alt="Pizza Logo" />
            <Title>Welcome to the Pizza API</Title>
            <Description>
                Made by: David, Jenny, Nicklas
            </Description>
        </HomeContainer>
    )
}

export default Home;
