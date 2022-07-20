import { memo } from 'react';

import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Slider from 'components/Slider';

import useClients from 'hooks/useClients';

const OurClients: React.FC = () => {
  const { companies } = useClients();

  return (
    <Section
      id="our-clients"
      className="py-5 mb-5"
      backgroundColor="light-green"
    >
      <SectionTitle
        className="mb-5"
        title="Nossos Clientes"
        subtitle="Nossos anos de experiência em uma base diversificada de clientes nos
          tornaram especialistas em soluções inovadoras e com tecnologias de
          ponta a ponta, para transformações e tratamento de dados e imagens
          por meio de tecnologia de digitalização. Trabalhamos com empresas e
          organizações empresariais em praticamente todas as verticais e
          geografias, do varejo a finanças, manufatura, saúde, fornecedores de
          tecnologia e muito mais."
      />
      <Slider companies={companies} />
    </Section>
  );
};

export default memo(OurClients);
