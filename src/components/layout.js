import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/index.styl';
import Footer from './footer';
import Header from './header';
import NavigationBar from './nagivation-bar';
import ScrollToTop from './scroll-to-top';
import backgroundImg from '../images/backgroundVeggies.jpg';


library.add(fab, fas);

const heroBackgroundImage = {
    backgroundImage: 'url(' + backgroundImg + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    zIndex: -1
};

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, menuLinks }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <React.Fragment>
      <Header menuLinks={menuLinks} />
      <main style={heroBackgroundImage}>{children}</main>
      <Footer author={author} />
      <NavigationBar menuLinks={menuLinks} />
      <ScrollToTop />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
