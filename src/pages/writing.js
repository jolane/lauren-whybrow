import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import { Grid, Col } from '../util/universal'
import Label from '../components/Label'
import LargeCopy from '../components/LargeCopy'
import WorkItem from '../components/WorkItem'


const WritingPage = ({ data }) => {
	const nodes = data.allWritingYaml.edges
	return(
		<div>
			<Grid>
				<Col>
					<Label>
						Writing.
					</Label>
				</Col>
				<Col>
					<LargeCopy>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</LargeCopy>
				</Col>
			</Grid>
			<Grid full>
				{nodes.map((node, index) => {
					let { title, image, text, type } = node.node
					let number = (index + 1 < 10) ? `0${index + 1}.` : `${index + 1}.`
					return (
						<WorkItem
							key={index}
							title={title}
							img={image}
							text={text}
							type={number}
						/>
					)
				}
				)}
			</Grid>
		</div>
	)
}


export const query = graphql`
	query WritingQuery {
		allWritingYaml {
	  		edges {
	  		  	node {
					text
					image
					title
					type
	    		}
	  		}
		}
	} 
	`



export default WritingPage
