import * as React from "react"
import {css} from '@emotion/react'



import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageCamera from '../components/imageCamera'
import Contenidohome from '../components/contenidohome'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
    css={css`
    margin-bottom:15em;
    `}>
    <ImageCamera />
    <Contenidohome />
    </div>
  </Layout>
)

export default IndexPage




