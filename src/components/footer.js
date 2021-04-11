import React from 'react'
import {css} from '@emotion/react'
import Social from './social'

const Footer = () => {
    return (
        <footer
        css={css`
        background-color: #222 ;
        bottom:0;
        position: absolute;
        width:100%;
        `}
        >
          <div
          css={css`
          max-width:1200px;
          margin:0 auto;

          @media (min-width: 768px) {
            display:flex;
            align-items: center;
            justify-content: space-between;
          }
          `}
          >
            <h1
            css={css`
            color:#fff;
            text-align:center;
            `}
            >Vertigo</h1>
           <Social />
           <div
            css={css`
            text-align:center;
            `}
            >
                 <p>  © {new Date().getFullYear()}by kyru
          {` `}</p>
          </div>
          </div>  
        </footer>
    )
}

export default Footer
