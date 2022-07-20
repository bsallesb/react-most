import styled from 'styled-components';

export const Main = styled.main`
  @media (max-width: 575px) {
    padding-top: 10vh;
  }

  @media (min-width: 576px) {
    padding-top: 10vh;
  }

  @media (min-width: 768px) {
    padding-top: 20vh;
  }

  @media (min-width: 992px) {
    padding-top: 25vh;
  }
`;

export const Title = styled.h2`
  @media (max-width: 575px) {
    font-size: 2.5rem;
  }

  @media (min-width: 576px) {
    font-size: 2.8rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
export const SubTitle = styled.p`
  @media (max-width: 575px) {
    font-size: 0.9rem;
  }

  @media (min-width: 576px) {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
