import styled from 'styled-components';

export const Cover = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-size: cover;
  background-position: center center;
  border: solid 2.5px #1eb9ba;
  border-radius: 400px;
`;

export const StyledSlider = styled.div`
  & .slick-track {
    display: flex;
    align-items: stretch;
  }

  & .slick-slide {
    display: flex;
    align-items: stretch;
    align-self: stretch;
  }

  & .slick-slide > div {
    display: flex;
    align-items: stretch;
    width: 100%;
  }

  & .slick-dots {
    bottom: -40px;
  }
`;
