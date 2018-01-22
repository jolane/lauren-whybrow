import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h5`
  font-family: 'GTSectraFine';
  font-size: 1.4rem;
  padding-top: 2.1em;
  line-height: 1;
  vertical-align: baseline;
  font-weight: 600;
  margin: 0;
  ${props =>
    props.nopad &&
    `
		padding-top: 0;
	`};
`

const Label = props => <Wrapper {...props}>{props.children}</Wrapper>

export default Label
