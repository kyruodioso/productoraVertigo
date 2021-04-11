import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {css} from '@emotion/react'
import Image from 'gatsby-image'
import Feed from 'react-instagram-authless-feed'





import ContenidoProyectos from '../components/contenidoproyectos'

const proyectos = () => {
    return (
    <Layout>
    <SEO title="Proyectos" />
    <div
    css={css`
     margin-bottom:15em;
    `}
    >
  <ContenidoProyectos />
  <div
  css={css`
  justify-content:center;
  text-align:center;
  `}
  >
  <Feed component={Image} userName="vertigoproduccionesok" className="Feed" classNameLoading="Loading" limit="12" />
  </div>
  </div>
</Layout>
    )
}

export default proyectos
