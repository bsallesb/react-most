import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

export const BorderPill = styled(AnchorLink)`
  border-radius: 18px;

  &.bg-blue {
    background-color: var(--color-blue);
    border: solid var(--color-dark-blue);
  }

  &.bg-black {
    background-color: black;
    border: solid black;
  }
`;
