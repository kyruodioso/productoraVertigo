import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {css} from '@emotion/react'

const Contenidonosotros = () => {
    const informacion= useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: {eq: "proyectos"}}){
         nodes {
           titulo
          contenido
          imagen{
            fluid{
                ...GatsbyDatoCmsFluid  
            }
          }
        }
        }
      }
    `)

    const {titulo, contenido, }= informacion.allDatoCmsPagina.nodes[0]

    return (
        <div>
                <>
        <div
        css={css`
        margin:2em;
        justify-content:center;
        text-align: center;
        `}
        >
           <h2
           css={css`
             text-transform: uppercase;
           `}
           >{titulo}</h2> 
           <div>
               <p>{contenido}</p>
           </div>      
           </div>
        </>
        </div>
    )
}

export default Contenidonosotros