import styled from '@emotion/styled';
import Img from 'gatsby-image';
import React from 'react';
import HighlightList from './HighlightList';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledStaticImageContainer } from './_shared/styled-image-container';
import { StyledSection } from './_shared/styled-section';

const StyledAboutContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledTextSection = styled.section`
  color: var(--paragraph-text-dark);
  white-space: pre-line;
`;

const About = ({ data }) => {
  const {
    frontmatter: { title, highlights, about_image },
    html,
  } = data;

  const image = about_image ? about_image.childImageSharp.fluid : null;

  return (
    <StyledSection id="about">
      <StyledH1>Our Farm</StyledH1>
      <StyledAboutContainer>
        {image && (
          <StyledStaticImageContainer>
            <Img fluid={image} objectFit="contain" />
          </StyledStaticImageContainer>
        )}
        <div>
          <StyledH2>{title}</StyledH2>
          <StyledTextSection dangerouslySetInnerHTML={{ __html: html }} />
          <HighlightList highlights={highlights} />
        </div>
      </StyledAboutContainer>
    </StyledSection>
  );
};

About.propTypes = {};

export default About;
