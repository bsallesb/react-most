import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import PriceCard from 'components/PriceCard';
import PriceCardItem from 'components/PriceCard/PriceCardItem';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

import { Button } from './styles';

const Prices: React.FC = () => {
  return (
    <Section id="prices" className="pb-5 mb-5">
      <Section className="py-5 mb-5" backgroundColor="dark-blue">
        <SectionTitle
          title="Adquira nossas soluções"
          subtitle="Escolha um dos nossos pacotes"
          color="white"
          subtitleColor="white"
        />
      </Section>
      <Container>
        <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 justify-content-center mb-5">
          <Col className="d-flex">
            <PriceCard title="Beginner" monthlyPrice={29} anualPrice={328}>
              <PriceCardItem
                title="Transcrição de Áudio Assíncrono"
                description="120 minutos (R$0,20 / minuto excedente)"
              />
              <PriceCardItem
                title="Transcrição de Áudio em tempo real"
                description="90 minutos (R$0,40 / minuto excedente)"
              />
              <PriceCardItem
                title="Identificação de Idiomas em áudios"
                description="200 minutos (R$0,05 / minuto excedente)"
              />
              <PriceCardItem
                title="Análise de sentimento a partir do áudio (áudio pré-gravado)"
                description="120 minutos (R$0,40 / minuto excedente)"
              />
            </PriceCard>
          </Col>
          <Col className="d-flex">
            <PriceCard title="Business" monthlyPrice={44.9} anualPrice={499.9}>
              <PriceCardItem
                title="Transcrição de Áudio Assíncrono"
                description="200 minutos (R$0,15 / minuto excedente)"
              />
              <PriceCardItem
                title="Transcrição de Áudio em tempo real"
                description="120 minutos (R$0,40 / minuto excedente)"
              />
              <PriceCardItem
                title="Identificação de Idiomas em áudios"
                description="500 minutos (R$0,03 / minuto excedente)"
              />
              <PriceCardItem
                title="Análise de sentimento a partir do áudio (áudio pré-gravado)"
                description="200 minutos (R$0,35 / minuto excedente)"
              />
            </PriceCard>
          </Col>
          <Col className="d-flex">
            <PriceCard title="Enterprise">
              <PriceCardItem title="Preços especiais para grandes volumes" />
              <PriceCardItem title="Prioridade no suporte técnico" />
              <PriceCardItem title="Gestor de conta dedicado." />
              <Button
                href="#contact"
                offset="100"
                className="d-flex mt-auto btn btn-lg justify-content-center align-items-center"
              >
                <p className="m-0 fs-4">Consultar preços</p>
              </Button>
            </PriceCard>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default memo(Prices);
