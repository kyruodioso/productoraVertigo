import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'
import {css} from '@emotion/react'


const nav =styled.nav`
     display:flex;
     justify-content: center;
     padding-bottom: 3rem;
     @media (min-width: 768px){
        padding-bottom:0;
}
`;
const NavLink =styled(Link)`
   color: #FFFFFF;
   font-size: 1.6rem;
   font-weight:700;
   line-height:1rem;
   font-family:'Roboto',sans-serif;
   text-decoration:none;
   padding: 1rem;
   margin-right:1rem;

   &::last-of-type{
       margin-right:0;
   }
   &.actual-page{
       border-bottom:2px solid #FFFFFF;
   }
`

const Nav = () => {
    return (
        <div css={css`
        color:#fff;
        text-align:center;
        justify-content:center;
        `}>
            <nav>
                <NavLink to={'/'} activeClassName="actual-page">Inicio</NavLink>
                <NavLink to={'/nosotros'} activeClassName="actual-page">Nosotros</NavLink>
                <NavLink to={'/proyectos'} activeClassName="actual-page">Proyectos</NavLink>

            </nav>
        </div>
    )
}

export default Nav
