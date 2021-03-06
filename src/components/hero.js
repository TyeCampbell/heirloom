import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import {ButtonLink} from './links/button-link';
import ScrollIndicator from './scroll-indicator';
import { mq } from './_shared/media';
import { StyledSectionHero } from './_shared/styled-section';
import backgroundImg from '../images/backgroundVeggies.jpg';

const StyledHeroSection = styled(StyledSectionHero)`
  min-height: calc(100vh + var(--header-height));
  position: relative;
  max-width: 100%;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  z-index: 0;

  ${mq.gt.sm} {
   min-height: calc(100vh + var(--header-height));
  }
`;
const StyledBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
  padding: calc(3 * var(--header-height)) 0 0 0;
  max-width: 1000px;
`;
const StyledIntroduction = styled.div`
  color: var(--primary-color);
  font-weight: normal;
`;
const StyledCompanyName = styled.h1`
  color: var(--title-color-light);
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
  color: var(--paragraph-text-light);
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
        <StyledCompanyName>{author}</StyledCompanyName>
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
