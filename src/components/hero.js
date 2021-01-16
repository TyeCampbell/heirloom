import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import ScrollIndicator from './scroll-indicator';
import { mq } from './_shared/media';
import { StyledSectionHero } from './_shared/styled-section';
import backgroundImg from '../images/backgroundVeggies.jpg';


const StyledHeroSection = styled(StyledSectionHero)`
  min-height: calc(100vh + var(--header-height));
  position: relative;

  ${mq.gt.sm} {
   min-height: calc(100vh + 2.2 * var(--header-height));
  }
`;
const StyledBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
  padding: 30px 0;
  max-width: 1000px;
  margin-bottom: 60px;
`;
const StyledIntroduction = styled.div`
  color: var(--primary-color);
  font-weight: normal;
`;
const StyledAuthor = styled.h1`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledDescription = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  max-width: 500px;
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description, ctaLink, ctaLabel } = data;

  return (
    <StyledHeroSection>
        <StyledBodyWrapper>
            <StyledIntroduction>{introduction}</StyledIntroduction>
            <StyledAuthor>{author}</StyledAuthor>
            <StyledTagline>{tagline}</StyledTagline>
            <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
            <ButtonLink label={ctaLabel} link={ctaLink} />
            <ScrollIndicator />
        </StyledBodyWrapper>
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
