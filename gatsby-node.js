const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators
	if(node.internal.type === 'MarkdownRemark') {
		const fileNode = getNode(node.parent);
		console.log('\n', fileNode.relativePath);
		console.log(createFilePath({ node, getNode, basePath: `pages/posts` }));
		const slug = createFilePath({node, getNode, basePath: `pages/posts`});
		createNodeField({
			node,
			name: `slug`,
			value: `work${slug}`
		})
	}
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/pages/jolane.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}