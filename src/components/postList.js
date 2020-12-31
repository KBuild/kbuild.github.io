import React from 'react'
import { Link } from 'gatsby'

const PostList = ({ postEdges }) => {
  return (
    <div>
      {postEdges.map((postEdge) => (
        <article
          style={{
            border: '1px solid #ddd',
            borderRadius: '0.25em',
            padding: '1.25em',
          }}
        >
          <Link to={postEdge.node.frontmatter.slug} key={postEdge.node.frontmatter.title}
            style={{
              textDecoration: 'none',
            }}
          >
            <header style={{marginBottom: '1em'}}>
              {postEdge.node.frontmatter.title}
            </header>
          </Link>
          <section>
            {postEdge.node.excerpt}
          </section>
        </article>
      ))}
    </div>
  )
}

export default PostList