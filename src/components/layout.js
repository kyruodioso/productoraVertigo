import React from 'react'
import { Global, css } from '@emotion/react'
import Header from './header'
import Footer from './footer'


const layout = (props) => {
    return (
        <>
            <Global
                styles={css`
            html{
                font-size:62.5%;
                min-height: 100%;
                position: relative;
            }
            body {
                background-color:#fff;
                font-size:18px;
                font-size:1.8rem;
                line-height:1.5;
                font-family:'Roboto',sans-serif;
                margin: 0;
            }
            h1, h2, h3, h4{
                font-family:'Roboto',sans-serif;
                margin: 0;
                line-height:1.5;
            }
            ul{
                list-style:none;
                margin: 0;
                padding: 0;
            }
            i{
                color:#FFF
            }
            i:hover{
               color:#F3F3F3;
               font-weight: bold; 
            }
            .Feed {
             margin: auto;
             padding: 1% 1%;
             justify-content:center;
            }
             .Feed a img {
             margin: 1em;
              max-width: 23rem;
              animation: fadein 3s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

            `}
            />
            <Header />

            {props.children}
            <Footer />
        </>
    )
}

export default layout
