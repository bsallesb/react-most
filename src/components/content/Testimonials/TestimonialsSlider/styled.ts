import styled from 'styled-components';

export const Cover = styled.div`
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center top;
  border: solid 2.5px #1b406a;
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

  & .slick-dots > li {
    display: none;
  }
`;
