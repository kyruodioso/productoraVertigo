import React from 'react'
import { css } from '@emotion/react'





const social = () => {
    return (
        <nav css={css`
            left:0;
            right:0;
             width:100%;
     padding-bottom: 3rem;
     @media (min-width: 768px){
        padding-bottom:0;
        }`}>
            <ul
                css={css`
                 display:flex;
                 justify-content: space-around;
                 text-align:center;
            color: #FFFFFF;
            font-size: 1.5em;
            font-weight:700;
            margin-left:2em;
            margin-right:2em;
            line-height:1rem;

   &.actual-page{
       border-bottom:2px solid #FFFFFF;
   }`}
            >
                <li><a href="https://www.facebook.com/VertigoProduccionesOk"><i className="fab fa-facebook" aria-label="Facebook"></i></a></li>
                <li><a href="https://www.instagram.com/vertigoproduccionesok/?hl=es-la"><i className="fab fa-instagram" aria-label="Instagram"></i></a></li>
                <li><a href="mailto:vertigoproduccionesok@gmail.com"><i className="far fa-envelope" aria-label="Email"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UC4Qs43X77B9Txc1LyzlAbAA/featured" aria-label="Youtube"><i className="fab fa-youtube"></i></a></li>

            </ul>
        </nav>
    )
}

export default social
