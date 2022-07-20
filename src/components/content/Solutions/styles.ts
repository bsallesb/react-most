import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: bold;
  color: #1b406a;

  @media (max-width: 575px) {
    font-size: 2.4rem;
  }

  @media (min-width: 576px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.h3`
  @media (max-width: 575px) {
    font-size: 1.8rem;
  }

  @media (min-width: 576px) {
    font-size: 2.2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;

export const Description = styled.p`
  @media (max-width: 575px) {
    font-size: 1.3rem;
  }

  @media (min-width: 576px) {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
