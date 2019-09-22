import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';
import Header from '../components/header'
import '../components/layout.css'
//import Layout from '../components/layout'
import '../pages/project-page.css'

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProjects {
                edges {
                    node {
                        title
                        slug
                        featureImage {
                            fixed(width: 400) {
                                ...GatsbyContentfulFixed
                            }
                        }
                       
                    }
                }
            }
        }
    `)

    

    return (
        
        <div>
        <Header />
            <div className="allProjects">
            
                {data.allContentfulProjects.edges.map((edge) => {
                    return (
                        
                            <Link to={`/projects/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <Img fixed={edge.node.featureImage.fixed}/>
                            </Link>
                            
                        
                    )
                })}
                </div>
                </div>
            
    )
}

export default ProjectPage
