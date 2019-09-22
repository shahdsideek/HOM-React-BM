import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import Layout from '../components/layout'
import Header from '../components/header'
import Img from 'gatsby-image';
import './project-template.css'

export const query = graphql`
    query($slug: String!) {
        contentfulProjects(slug: {eq: $slug}) {
            title
            featureImage {
                fluid(maxHeight: 450,maxWidth:900 quality:100) {
                    ...GatsbyContentfulFluid
                }
            }
            projectOverview
            largeImage {
            fluid(maxHeight:500 quality:100) {
                ...GatsbyContentfulFluid
            }
        }
        quote
        gridImage1{
            fluid(maxHeight:500) {
                ...GatsbyContentfulFluid
            }
        }
        gridImage2{
            fluid( maxHeight:500) {
                ...GatsbyContentfulFluid
            }
        }
        gridImage3{
            fluid( maxHeight:500) {
                ...GatsbyContentfulFluid
            }
        }
        gridImage4{
            fluid( maxHeight:500) {
                ...GatsbyContentfulFluid
            }
        }
            moduleText1{
                json
            }
            moduleImage1{
                fluid(maxHeight:400) {
                    ...GatsbyContentfulFluid
                }
            }
            moduleText2{
                json
            }
            moduleImage2{
                fluid(maxHeight:400) {
                    ...GatsbyContentfulFluid
                }
            }
            moduleText3{
                json
            }
            moduleImage3{
                fluid(maxHeight:400) {
                    ...GatsbyContentfulFluid
                }
            }
            moduleText4{
                json
            }
            moduleImage4{
                fluid(maxHeight:400) {
                    ...GatsbyContentfulFluid
                }
            }
            
        }
    }
`

// const NonStretchedImage = props => {
//     let normalizedProps = props
//     if (props.fluid && props.fluid.presentationWidth) {
//       normalizedProps = {
//         ...props,
//         style: {
//           ...(props.style || {}),
//           maxWidth: props.fluid.presentationWidth,
//           margin: "0 auto", // Used to center the image
//         },
//       }
//     }
  
//     return <Img {...normalizedProps} />
//   }

const Project = (props) => {
    // const options = {
    //     renderNode: {
    //         "embedded-asset-block": (node) => {
    //             const alt = node.data.target.fields.title['en-US']
    //             const url = node.data.target.fields.file['en-US'].url
    //             return <img alt={alt} src={url} />
    //         }

    //     }
    // }



    return (
        <div>
        <Header />
        <div className="container">
            <Img fluid={props.data.contentfulProjects.featureImage.fluid}/>
            <div className="bannerTitle">
            <h1>{props.data.contentfulProjects.title}</h1>
            </div>
            </div>
            <div className="projectOverview">
            <h2>{props.data.contentfulProjects.projectOverview[0]}</h2>
            <h2>{props.data.contentfulProjects.projectOverview[1]}</h2>
            <h2>{props.data.contentfulProjects.projectOverview[2]}</h2>
            </div>
            <div className="largeImg">
            <Img fluid={props.data.contentfulProjects.largeImage.fluid}/>
            </div>
            <div className="quote">
            <h1>{props.data.contentfulProjects.quote}</h1>
            </div>
            <div className="four-imageGrid">
            <Img fluid={props.data.contentfulProjects.gridImage1.fluid}/>
            <Img fluid={props.data.contentfulProjects.gridImage2.fluid}/>
            <Img fluid={props.data.contentfulProjects.gridImage3.fluid}/>
            <Img fluid={props.data.contentfulProjects.gridImage4.fluid}/>
            </div>
            <div className="project-module-group">  
            <h1>{documentToReactComponents(props.data.contentfulProjects.moduleText1.json)}</h1>
            <Img fluid={props.data.contentfulProjects.moduleImage1.fluid}/>
            <Img fluid={props.data.contentfulProjects.moduleImage2.fluid}/>
            <p>{documentToReactComponents(props.data.contentfulProjects.moduleText2.json)}</p>
            <p>{documentToReactComponents(props.data.contentfulProjects.moduleText3.json)}</p>
            <Img fluid={props.data.contentfulProjects.moduleImage3.fluid}/>
            <Img fluid={props.data.contentfulProjects.moduleImage4.fluid}/>
            <p>{documentToReactComponents(props.data.contentfulProjects.moduleText4.json)}</p>
            </div> 
        </div>
    )
}
 
export default Project