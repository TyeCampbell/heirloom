import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './icon';
import { mq } from './_shared/media';
import { flexCenter } from './_shared/styled-mixins';
import {StyledSpan} from './_shared/styled-headings';

const StyledNav = styled.nav`
  background-color: var(--header-color);
  border-top: 1px solid var(--border-color);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 2;

  ${mq.gt.sm} {
    display: none;
  }
`;
const StyledNavLink = styled(Link)`
  ${flexCenter};
  flex-direction: column;
  flex-shrink: 1;
  text-decoration: none;
  color: var(--title-color-light) !important;
  font-size: 0.8rem;
  line-height: 1;
  position: relative;
  height: var(--header-height);

  > svg {
    margin-bottom: 0.4rem;
    fill: var(--title-color-light);
  }

  &.active {
    font-weight: 700;
    border-bottom: none !important;
    border-top: 2px solid var(--primary-color);

    & > svg {
      fill: var(--primary-color);
    }
  }
  &:hover {
    color: var(--primary-color) !important;

    & > svg {
      fill: var(--primary-color);
    }
  }
`;

// Note: The NavigationBar component should only be used for up to 5 menu links
const NavigationBar = ({menuLinks}) => {
  return (
      <StyledNav>
        {menuLinks.map((link, index) => (
            <StyledNavLink key={link.name} to={link.link} activeClassName="active">
              <Icon icon={link.icon} />
              <StyledSpan>
                {link.name}
              </StyledSpan>
            </StyledNavLink>
        ))}
      </StyledNav>
  );
};

const menuLinksPropTypeShape = PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
});

NavigationBar.propTypes = {
    menuLinks: PropTypes.arrayOf(menuLinksPropTypeShape).isRequired,
};

export default NavigationBar;
