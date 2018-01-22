import styled, { css } from 'styled-components'

export const globalPadding = '3rem'

export const Grid = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 ${globalPadding};
  flex-wrap: wrap;
  margin-top: 20rem;
  ${props =>
    props.full &&
    `
		width: 100%;
	`};
`

export const Col = styled.div`
  &:first-child {
    width: 10.8rem;
  }
  &:last-child {
    width: 82.8rem;
  }
`

export const BodyCopy = styled.div`
  font-size: 1.6rem;
  line-height: 1.375;
  font-family: 'Maison Neue';
  font-weight: 200;
  p {
    margin: 0 0 1em 0;
  }
`

const sizes = {
  xl: 1440,
  desktop: 992,
  tablet: 768,
  phone: 376,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 10}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})
