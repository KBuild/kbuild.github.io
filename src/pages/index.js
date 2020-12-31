import React from "react"

import Layout from "../components/layout"
import PostList from "../components/postList"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    
    <PostList postEdges={data.allMarkdownRemark.edges} />
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(format: MARKDOWN)
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            slug
            title
          }
        }
      }
    }
  }
`

export default IndexPage
