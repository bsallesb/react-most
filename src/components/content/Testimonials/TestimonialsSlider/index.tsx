import { memo } from 'react';

import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useClients from 'hooks/useClients';

import { Cover, StyledSlider } from './styled';

const TestimonialsSlider: React.FC = () => {
  const { companies } = useClients();

  return (
    <Container>
      <StyledSlider>
        <Slider
          className="mb-4"
          dots
          infinite
          speed={700}
          autoplay
          autoplaySpeed={5000}
          slidesToShow={1}
          slidesToScroll={1}
          initialSlide={0}
          pauseOnHover
        >
          {companies.map((company) => (
            <div key={company.id} className="text-center">
              <div className="p-1 w-100 d-flex justify-content-center">
                <Cover style={{ backgroundImage: `url(${company.manager})` }} />
              </div>
              <p className="mx-5 my-3 text-primary">{company.deposition}</p>
              <span className="fw-bold text-primary fs-5">{company.name}</span>
            </div>
          ))}
        </Slider>
      </StyledSlider>
    </Container>
  );
};

export default memo(TestimonialsSlider);
