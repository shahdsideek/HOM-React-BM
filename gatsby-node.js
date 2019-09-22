const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
                
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    const projectTemplate = path.resolve('./src/templates/projects.js')
    const res1 = await graphql(`
        query {
            allContentfulProjects {
                edges {
                    node {
                        slug
                    }
                }
                
            }
        }
    `)

    res1.data.allContentfulProjects.edges.forEach((edge) => {
        createPage({
            component: projectTemplate,
            path: `/projects/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}


