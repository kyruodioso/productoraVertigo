import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'



const ImageBackground = styled(BackgroundImage)`
   height: 700px;
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
   
   h2{
    font-size:4rem;
    margin:0%;

    @media (min-width:992px){
        font-size: 5.8rem;
    }
   }
   p{
       font-size:2rem;
       
    @media (min-width:992px){
        font-size: 2.6rem;
   }
   }
`

const ImageCamera = () => {

    const {image}= useStaticQuery(graphql`
    query {
        image: file(relativePath:{eq:"home-camera.jpg"}){
         sharp: childImageSharp {
           fluid{
             ...GatsbyImageSharpFluid_withWebp
          }
        }
        }
      }
    `);

    return (
           <>

          <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
           <TextImage>
               <h2>Productora audiovisual</h2>
               <p>Todos los eventos</p>
           </TextImage>
          </ImageBackground>   
           </>
    )
}

export default ImageCamera
