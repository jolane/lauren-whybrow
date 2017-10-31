import React from "react"

export default ({ data }) => {
	const {img, title} = data.markdownRemark.frontmatter
	return (
		<div>
			<img src={img} alt={title} />

			<h1>
				{title}
			</h1>
		</div>
	)
}


export const query = graphql`
	query WorkItemQuery($slug: String) {
		markdownRemark(fields: {slug: {eq : $slug }}) {
    		html
	  		frontmatter {
	    		title
      			img
	  		}
		}
	}
`
