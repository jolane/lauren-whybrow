import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import * as util from '../util/universal'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Hamburger from '../components/Hamburger'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 8rem;
  background-color: #fff;
  padding: 0 ${util.globalPadding};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
`

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      nav_open: false,
    }
  }

  toggleNav() {
    this.setState({ nav_open: !this.state.nav_open })
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav
          nav_open={this.state.nav_open}
          toggleNav={this.toggleNav.bind(this)}
        />
        <Hamburger
          toggleNav={this.toggleNav.bind(this)}
          nav_open={this.state.nav_open}
        />
      </HeaderWrapper>
    )
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
