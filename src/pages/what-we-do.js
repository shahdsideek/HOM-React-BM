import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';
import Header from '../components/header'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const whatWeDo = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulWhatWeDo {
                edges {
                    node {
                        title
                        bannerImage {
                            fixed(width:1200, height:140) {
                                ...GatsbyContentfulFixed
                            }
                        }
                        content {
                            json
                        }
                        socialMedia {
                            json
                        }
                        video {
                            json
                        }
                        strategy {
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
                {data.allContentfulWhatWeDo.edges.map((edge) => {
                    return (
                            <div className="whatWeDo-page-content">
                            <div className="container">
                                <Img fixed={edge.node.bannerImage.fixed}/>
                                <div className="bannerTitle-what-we-do">
                                <h2>{edge.node.title}</h2>
                                </div>
                                </div>
                                <div className="what-we-do-content">
                                <p>{documentToReactComponents(edge.node.content.json)}</p> 
                                <p>{documentToReactComponents(edge.node.socialMedia.json)}</p>
                                <p>{documentToReactComponents(edge.node.video.json)}</p>
                                <p>{documentToReactComponents(edge.node.strategy.json)}</p>
                                </div>
                                </div>
                    )
                })}
                </div>
               
            
    )
}

export default whatWeDo