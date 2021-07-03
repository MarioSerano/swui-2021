import React from "react"

import { NextSeo, NextSeoProps } from "next-seo"

// Mainly used SEO Props, generally used in pages you use
// If you create a page, please refer to using this
// Use case: <SEO title="Seminar" />
// Will result the title to be: Seminar | COMPFEST
interface MainlyUsedSEOProps {
  title?: string
}

type SEOProps = MainlyUsedSEOProps & Omit<NextSeoProps, "title">

const SEO: React.FC<SEOProps> = ({ title, ...other }) => {
  return <NextSeo title={title} {...other} />
}

export default SEO
