import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import About from '../components/about';
import CardGrid from '../components/card-grid';
import Contact from '../components/contact';
import WhatWeGrow from '../components/WhatWeGrow';
import Hero from '../components/hero';
import HowMembershipWorks from '../components/HowMembershipWorks';
import Layout from '../components/layout';
import RecentPosts from '../components/recent-posts';
import SEO from '../components/seo';
import { indexMenuLinks } from '../components/_config/menu-links';

const Index = ({ data }) => {
  const heroData = {
    author: data.site.siteMetadata.author,
    tagline: data.hero.frontmatter.tagline,
    description: data.hero.html,
    introduction: data.hero.frontmatter.introduction,
    ctaLabel: data.hero.frontmatter.cta_label,
    ctaLink: data.hero.frontmatter.cta_link,
  };

  return (
    <Layout menuLinks={indexMenuLinks}>
      <SEO title="Home" />
      <Hero data={heroData} />
      <HowMembershipWorks/>
      <About data={data.about} />
      <CardGrid cards={data.cards.frontmatter.cards} description={data.cards.html} title="Our Farm is For You" id="features" />
      <WhatWeGrow featured={data.featuredProjects.nodes} />
      <RecentPosts data={data.blog.edges} />
      <Contact data={data.contact} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }

    hero: markdownRemark(fileAbsolutePath: { regex: "/content/sections/hero/" }) {
      frontmatter {
        introduction
        tagline
        cta_label
        cta_link
      }
      html
    }
    
    header: markdownRemark(fileAbsolutePath: { regex: "/content/sections/header/" }) {
      frontmatter {
        button_label
        button_link
      }
    }

    about: markdownRemark(fileAbsolutePath: { regex: "/content/sections/about/" }) {
      frontmatter {
        title
        highlights
        about_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }

    cards: markdownRemark(fileAbsolutePath: { regex: "/content/sections/cards/" }) {
      frontmatter {
        cards {
          label
          image
          description
        }
      }
      html
    }

    featuredProjects: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/content/projects/" }, frontmatter: { featured: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          highlights
          cover_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }

    blog: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 4
      filter: { fileAbsolutePath: { regex: "/content/posts/" }, frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "D MMMM, YYYY")
            description
            cover_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }

    contact: markdownRemark(fileAbsolutePath: { regex: "/content/sections/contact/" }) {
      frontmatter {
        phone
        email
        address
      }
      html
    }
  }
`;
