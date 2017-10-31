import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
	width: 100%;
	position: relative;
	&:after {
		content: '';
		display: block;
		padding-bottom: 75%;
	}
`

const Content = styled.img`
	display: block;
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	${props => props.fit && `
		object-fit: ${props.fit};
		object-position: ${props.position};
	`}
`


const RatioImage = ({ src, alt, position, fit, ratio }) => (
	<Container ratio={ratio}>
		<Content src={src} alt={alt} position={position} fit={fit} />
	</Container>
)

export default RatioImage