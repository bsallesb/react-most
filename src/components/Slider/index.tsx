import { memo } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CompaniesType } from 'types/companies';

import { Cover, StyledSlider } from './styled';

interface ISpotSliderProps {
  companies: CompaniesType[];
}

const responsive = [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 750,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
];

const SpotSlider: React.FC<ISpotSliderProps> = ({ companies }) => (
  <StyledSlider>
    <Slider
      className="mb-4"
      dots
      infinite
      speed={700}
      autoplay
      autoplaySpeed={3000}
      slidesToShow={8}
      slidesToScroll={1}
      initialSlide={0}
      responsive={responsive}
      pauseOnHover
    >
      {companies.map((company) => (
        <div key={company.id} className="mx-3">
          <Cover style={{ backgroundImage: `url(${company.logo})` }} />
        </div>
      ))}
    </Slider>
  </StyledSlider>
);

export default memo(SpotSlider);
