import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';
import Header from '../components/header'
import '../components/layout.css'
//import Layout from '../components/layout'
import '../components/blog-page.css'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                        featureImage {
                            fixed(width: 400) {
                                ...GatsbyContentfulFixed
                            }
                        }
                        body {
                            json
                        }
                    }
                }
            }
        }
    `)

    

    return (
        
        <div>
        <Header />
            <div className="HeroGroup">
            <h1>Blog</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <Img fixed={edge.node.featureImage.fixed}/>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                            
                        
                    )
                })}
                </div>
                </div>
            
    )
}

export default BlogPage