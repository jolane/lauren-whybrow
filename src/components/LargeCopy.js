import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h4`
	font-size: 4.5rem;
	line-height: 1.333;
	font-weight: 200;
	margin: 0 0 0.75em;
  	strong {
    	font-weight: 700;
	}
	i {
		font-style: italic;
	}
`

const LargeCopy = ({ children }) => (
	<Wrapper>
		{ children }
	</Wrapper>
)

export default LargeCopy