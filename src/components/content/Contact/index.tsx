import { memo } from 'react';

import { Container } from 'react-bootstrap';

import ContactForm from 'components/ContactForm';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="pb-5 mb-5">
      <Container>
        <Section backgroundColor="dark-blue" className="py-5 px-3">
          <SectionTitle
            title="Entre em contato conosco"
            color="white"
            className="mb-4"
          />
          <ContactForm />
        </Section>
      </Container>
    </Section>
  );
};

export default memo(Contact);
