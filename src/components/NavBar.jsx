import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    background-color: #2c3e50;
    width: 100vw;  // Tilføjet for at fylde hele bredden
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    width: 100%;  // Ændret til fuld bredde
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
`

const StyledNavLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s;

    &.active {
        background-color: #34495e;
    }

    &:hover {
        background-color: #34495e;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <li><StyledNavLink to="/">Home</StyledNavLink></li>
                <li><StyledNavLink to="/vision">Vision</StyledNavLink></li>
                <li><StyledNavLink to="/endpoints">Endpoints</StyledNavLink></li>
            </NavList>
        </Nav>
    )
}

export default Navbar