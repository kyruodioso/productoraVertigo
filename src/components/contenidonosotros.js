import React, {useEffect} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {gsap} from 'gsap'
import {graphql, useStaticQuery} from 'gatsby'
import {css} from '@emotion/react'
import Image from 'gatsby-image'

const Contenidonosotros = () => {
    const informacion= useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: {eq: "nosotros"}}){
         nodes {
           titulo
          contenido
          contenido2
          contenido3
          contenido4
          imagen{
            fluid{
                ...GatsbyDatoCmsFluid  
            }
          }
        }
        }
      }
    `)

    const {titulo, contenido, contenido2, contenido3,contenido4, imagen}= informacion.allDatoCmsPagina.nodes[0]

    useEffect(() => {   
      gsap.from('.text', {x:-25})  
      gsap.to('.text', {x:0, duration: 10})
      gsap.from('.image', {x:25})  
      gsap.to('.image', {x:0, duration: 10})
  }, []);

  var settings = {
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    dots:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
        <div
        css={css`
        bottom:0;
        `}
        >
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
             margin-bottom:2em;
           `}
           >{titulo}</h2> 
           <div 
           css={css`
                     width:100%;
                     display:flex;
                     flex-direction:row;
                     flex-wrap:wrap;
                     align-content: center;
       align-items:center;
   justify-content: center;
           `}>
             <div
                css={css`
                clear:left;
                max-width:30rem;
                padding:1rem;
                `}
                className="text">
  <Slider {...settings}

            >
      <div>
        <p>{contenido2}</p>
      </div>
      <div>
        <p>{contenido3}</p>
      </div>
      <div>
        <p>{contenido4}</p>
      </div>
      <div>
        <p>{contenido}</p>
      </div>
    </Slider>
    </div>
               <Image fluid={imagen.fluid}
               css={css`
               clear:right;
               width:40em;
               margin:0.5em;
               `}
               className="image"
               />
           </div>      
           </div>
    
        </div>
    )
}

export default Contenidonosotros
