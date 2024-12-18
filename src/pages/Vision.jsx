import React from 'react'
import styled from 'styled-components'

const VisionContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 15px;
    }
`
const Logo = styled.img`
    max-width: 100%;
    height: auto;
    margin: 2rem 0;

    @media (max-width: 768px) {
        max-width: 200px;
        margin: 1rem 0;
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

const Section = styled.section`
  margin-bottom: 2rem;
  
  h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }

  
`

const Vision = () => {
    return (
        <VisionContainer>
            <Title>Our Vision</Title>
            <Section>
                <h2>Purpose of the API</h2>
                <p>
                    Formålet med vores API endpoints er at skabe en lille illusion om et website med en webshop, der skal fungere som en pizza butik. Vi vil derfor gerne kunne indlæse en pizza liste med alle pizzaer. og foretage crud operationer for rollerne:
                    Som Kunde / User vil det omhandle bl.a (Se pizzaer, Køb pizza, Slet pizza fra indkøbskurv).
                    Som Sælgeren / Admin kan det omhandle ordreoversigt, ( Lav pizza, Se pizza liste, Slette pizza, Redigere / Opdatere pizza - og ved nogle af disse operationer også ordne flere pizzaer på en gang).
                </p>
            </Section>
            <Section>
                <h2>Vores API</h2>
                <p>
                    <a href="https://api.pizzas.bytecode.dk/api/routes" target="_blank">https://api.pizzas.bytecode.dk/api/routes</a>
                </p>
                <h2>Vores GitHub Repository</h2>
                <p>
                    <a href="https://github.com/m4cfly/pizza-api-december15" target="_blank">https://github.com/m4cfly/pizza-api-december15</a>
                </p>
                <h2>Mockup til frontend</h2>
                <Logo src="/pizza-mockup.png" />
            </Section>


        </VisionContainer>
    )
}

export default Vision