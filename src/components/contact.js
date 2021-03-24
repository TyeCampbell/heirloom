import styled from '@emotion/styled';
import React from 'react';
import {HeirloomIcon, Icon} from './icon';
import { mq } from './_shared/media';
import { StyledH1 } from './_shared/styled-headings';
import { StyledSection } from './_shared/styled-section';

const StyledContactSection = styled(StyledSection)`
  color: var(--paragraph-text-accent);
  margin-bottom: 70px;
`;
const StyledContainer = styled.section`
  display: flex;
  align-items: center;

  & > svg {
    font-size: 2rem;
    margin-right: 0.75rem;
  }
`;
const StyledFormContainer = styled.section`
  & > span {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
const StyledForm = styled.div`
  color: var(--primary-color);

  font-weight: normal;
`;
const StyledTextSection = styled.section`
  color: var(--paragraph-text-dark);
  white-space: pre-line;
  width: 100%;
  max-width: 500px;
  margin-left: 3px;
`;
const StyledSeparator = styled.div`
  height: 1px;
  width: 50%;
  background-color: var(--body-color);
`;
const StyledContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;
  margin-top: 2rem;

  ${mq.gt.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.gt.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Contact = ({ data }) => {
  const {
    frontmatter: { phone, email, address },
    html,
  } = data;

  return (
    <React.Fragment>
      <StyledContactSection id="contact">
        <StyledH1>Contact Us</StyledH1>
        <StyledTextSection dangerouslySetInnerHTML={{ __html: html }} />
        <StyledSeparator />
        <StyledContacts>
          {address && (
            <StyledContainer>
              <HeirloomIcon icon='sign' />
              {/*<Icon icon="map-marker-alt" />*/}
              <StyledFormContainer>
                <StyledForm>Address</StyledForm>
                <span>{address}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {email && (
            <StyledContainer>
              <HeirloomIcon icon='envelope' />
              {/*<Icon icon="paper-plane" />*/}
              <StyledFormContainer>
                <StyledForm>E-Mail</StyledForm>
                <span>{email}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {phone && (
            <StyledContainer>
              <HeirloomIcon icon='phone' />
              {/*<Icon icon="phone-alt" />*/}
              <StyledFormContainer>
                <StyledForm>Phone</StyledForm>
                <span>{phone}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
        </StyledContacts>
      </StyledContactSection>
    </React.Fragment>
  );
};

export default Contact;
