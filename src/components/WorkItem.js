import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Label from '../components/Label'
import RatioImage from '../components/RatioImage'

const Container = styled.div`
  width: calc(33% - 60px);
  box-sizing: border-box;
  padding-left: 10.8rem;
  margin-bottom: 4rem;
`

const Title = styled.h6`
  font-size: 1.8rem;
  line-height: 1.22;
  margin: 1em 0;
  position: relative;
  span {
    position: absolute;
    top: 0;
    left: -80px;
  }
`

const Thumb = styled.img`
  display: block;
  width: 100%;
  padding-bottom: 75%;
  object-fit: contain;
  object-position: center center;
`

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.375;
  font-family: 'Maison Neue';
`

const WorkItem = ({ img, title, type, text }) => (
  <Container>
    <RatioImage src={img} fit="contain" />
    <Title>
      {title}
      <span>
        <Label nopad>{type}</Label>
      </span>
    </Title>
    <Description>{text}</Description>
  </Container>
)

export default WorkItem
