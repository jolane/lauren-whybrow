import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import { Grid, Col } from '../util/universal'
import Label from '../components/Label'
import LargeCopy from '../components/LargeCopy'
import WorkItem from '../components/WorkItem'

const EditingPage = ({ data }) => {
	console.log(data.allWorkYaml);
	const nodes = data.allEditingJson.edges
	return (
		<div>
			<Grid>
				<Col>
					<Label>
						Editing.
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
					console.log(node);
					let { image } = node.node
					let number = (index + 1 < 10) ? `0${index + 1}.` : `${index + 1}.`
					return (
						<WorkItem
							key={index}
							img={image}
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
	query EditingQuery {
		allEditingJson {
    		edges {
      			node {
        			image
      			}
    		}
  		}
	} 
`

export default EditingPage
