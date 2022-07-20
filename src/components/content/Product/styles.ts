import styled from 'styled-components';

export const Image = styled.img`
  width: 80%;
  height: 700px;
  background-size: cover;
  background-position: center center;
`;

export const QRcodeBox = styled.img`
  width: 200px;
  height: 200px;
`;

export const Pills = styled.div`
  max-width: 280px;
`;

export const Title = styled.h2`
  @media (max-width: 575px) {
    font-size: 1.8rem;
  }

  @media (min-width: 576px) {
    font-size: 2.8rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
