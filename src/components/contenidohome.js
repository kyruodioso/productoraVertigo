import React, {useEffect} from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import {gsap} from 'gsap'
import {graphql, useStaticQuery} from 'gatsby'
import {css} from '@emotion/react'
import Image from 'gatsby-image'



const ImageBackground = styled(BackgroundImage)`
   height: 100vh;
`;
const TextImage= styled.div`
   background-image: linear-gradient(to top, rgba(34,49,63,.35), rgba(34,49,63,.75));
   color: #FFF;
   height: 100%;
   display:flex;
   flex-direction:column;
   flex:1;
   align-items:center;
   justify-content: center;
   text-align: center;
   
   q{
    font-size:3rem;
    margin:0%;

    @media (min-width:992px){
        font-size: 5.8rem;
    }
   }
   p{
       font-size:1.5rem;
       
    @media (min-width:992px){
        font-size: 2rem;
   }
   }
`

const Contenidohome = () => {

    const informacion= useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: {eq: "home"}}){
         nodes {
           titulo
          contenido
          contenido2
          contenido3
          empresa
          empresa1
          empresa2
          empresa3
          empresa4
             galeria{
            fluid{
              ...GatsbyDatoCmsFluid  
            }
          }
          imagen{
            fluid{
                ...GatsbyDatoCmsFluid  
            }
          }
        }
        }
      }
    `)



    const {titulo, contenido, contenido2, contenido3, imagen, galeria, empresa, empresa1, empresa2, empresa3, empresa4}= informacion.allDatoCmsPagina.nodes[0]

    useEffect(() => {   
      gsap.from('.image', {y:50, duration: 5})  
      gsap.to('.image', {y:0, duration: 5})
      gsap.from('.images', {y:50, duration: 5})  
      gsap.to('.images', {y:0, duration: 5})
  }, []);


    return (
        <>
        <div
        css={css`
        margin-top:2em;
        justify-content:center;
        text-align: center;
        `}
        >
          <div
          css={css`
          width:100%;
          display:flex;
          flex-direction: row;
          justify-content: center;
          margin-bottom: 2em;
          padding:0.2em;
          `}
          >
          <p
          css={css`
          background-color: #828282;
          margin:0.2em;
          padding:0.2em;
          color:#FFF;
          border-radius:5px;
          `}
          >{empresa}</p>
                    <p
          css={css`
          background-color: #828282;
          margin:0.2em;
          padding:0 0.2em;
          color:#FFF;
          border-radius:5px;
          `}
          >{empresa1}</p>
                    <p
          css={css`
          background-color: #828282;
          margin:0.2em;
          padding:0.2em;
          color:#FFF;
          border-radius:5px;
          `}
          >{empresa2}</p>
                    <p
          css={css`
          background-color: #828282;
          margin:0.2em;
          padding:0.2em;
          color:#FFF;
          border-radius:5px;
          `}
          >{empresa3}</p>
                              <p
          css={css`
          background-color: #828282;
          margin:0.2em;
          padding:0.2em;
          color:#FFF;
          border-radius:5px;
          `}
          >{empresa4}</p>
          </div>
           <h2
           css={css`
             text-transform: uppercase;
           `}
           >{titulo}</h2> 
           <div>
  
               <p>{contenido}</p>
               <ImageBackground tag="section" fluid={imagen.fluid} fadeIn="soft">
                 <TextImage>
                 <q>{contenido2}</q>
                 <p>{contenido3}</p>
                 </TextImage>
               </ImageBackground>
           </div>
           <div>
               <h2          
                css={css`
               color:#000;
               text-align:center;
               `}>Servicios</h2>
               <div
                         css={css`
                         margin:auto;
                         right: 0;
                         left:0;
                         width:100%;
                         display:flex;
                         flex-direction:row;
                         flex-wrap:wrap;
                         justify-content: center;
                         `}
                         className="images"
               >
               {
                   galeria.map((index, i) =>(
                       <Image key={i} fluid={index.fluid} 
                       css={css`
                       width:20em;
                       `}
                       />
                   ))
               }
               </div>
           </div>
           </div>
        </>
    )
}

export default Contenidohome

