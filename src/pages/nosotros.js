import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {css} from '@emotion/react'



import ContenidoNosotros from '../components/contenidonosotros'






const nosotros = () => (

    <Layout>
    <SEO title="nosotros" />
    <div
      css={css`
      margin-bottom:15em;
      `}>
  <ContenidoNosotros />
  </div>
</Layout>

)

export default nosotros




