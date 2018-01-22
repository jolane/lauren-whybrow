import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Grid, Col, media } from '../util/universal'
import Label from '../components/Label'

const Copy = styled.h5`
  font-size: 4.5rem;
  font-weight: 200;
  position: relative;
  strong {
    font-weight: 700;
  }
`

const BgCol = Col.extend`
  background-position: top right;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  padding: 10rem 10rem 0 0;
  margin-top: -10rem;
  max-width: 102.8rem;
  width: 102.8rem;
`

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      background: 'http://via.placeholder.com/350x150',
    }
  }
  componentDidMount() {
    window.setTimeout(function() {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', user => {
          if (!user) {
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/'
            })
          }
        })
      }
    }, 1000)
  }
  updateBackground(bg) {
    this.setState({ background: bg })
  }

  render() {
    return (
      <div>
        <Helmet>
          <script
            async
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          />
        </Helmet>
        <Grid>
          <Col>
            <Label>Intro.</Label>
          </Col>
          <BgCol bg={this.state.background}>
            <Copy>
              <strong
                onMouseEnter={e =>
                  this.updateBackground(
                    'http://via.placeholder.com/350x650/green/000'
                  )}
              >
                <i>Lauren Whybrow</i>
              </strong>{' '}
              is a book editor based in Melbourne, Australia. Her interests
              include{' '}
              <strong
                onMouseEnter={e =>
                  this.updateBackground(
                    'http://via.placeholder.com/350x150/e673ed/000'
                  )}
              >
                <i>potatoes, obnoxious jumpers</i>
              </strong>
              and{' '}
              <strong
                onMouseEnter={e =>
                  this.updateBackground(
                    'http://via.placeholder.com/100x350/red/000'
                  )}
              >
                <i>luxurious weekend getaways.</i>
              </strong>{' '}
              She also writes for an array of{' '}
              <strong>
                <i>publications</i>
              </strong>
              and{' '}
              <strong
                onMouseEnter={e =>
                  this.updateBackground(
                    'http://via.placeholder.com/550x250/red/000'
                  )}
              >
                <i>reviews books with emojis.</i>
              </strong>
            </Copy>
          </BgCol>
        </Grid>
      </div>
    )
  }
}

export default IndexPage
