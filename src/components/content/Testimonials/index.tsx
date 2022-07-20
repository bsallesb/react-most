import { memo } from 'react';

import TestimonialsSlider from 'components/content/Testimonials/TestimonialsSlider';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const Testimonials: React.FC = () => (
  <Section id="testimonials" className="py-5 mb-5">
    <SectionTitle className="pb-5" title="Depoimentos" />
    <TestimonialsSlider />
  </Section>
);

export default memo(Testimonials);
