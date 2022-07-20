import { memo } from 'react';

import { Container } from 'react-bootstrap';

import RealTimeAudio from 'assets/audio-tempo-real.jpeg';
import LanguageIdentifier from 'assets/identificacao-de-idiomas.jpeg';
import FeelingIdentifier from 'assets/identificador-de-sentimentos.jpeg';
import AsynchronousAudio from 'assets/transcricao-assincrona.jpg';

import Section from 'components/Section';

import { Title, Description, Subtitle } from './styles';

const Solutions: React.FC = () => {
  return (
    <Section id="solutions">
      <Container>
        <div className="d-flex d-lg-flex flex-column flex-lg-row row-lg-cols align-items-center my-5">
          <div className="col text-center text-lg-start order-2 order-lg-1">
            <img
              src={LanguageIdentifier}
              alt="Identificador de idiomas"
              className="img-fluid"
            />
          </div>
          <div className="col text-center text-lg-end order-1 order-lg-2">
            <Title className="mb-5">Identificação de Idiomas em áudios</Title>
            <Description>
              Obtendo fala e insights a nível global. Nossa solução tem suporte
              a 52 idiomas.
            </Description>
          </div>
        </div>
        <div className="d-block d-lg-flex row-lg-cols align-items-center my-5">
          <div className="col text-center text-lg-start">
            <Title className="mb-3">Transcrição de áudio em tempo real</Title>
            <Subtitle className="mb-5">Streaming</Subtitle>
            <Description>
              O recurso live-speech-to-text de transcrição ao vivo possibilita o
              uso de legendas em tempo real para o seu negócio. Nossas legendas
              garantem que as palestras e treinamentos ao vivo sejam acessíveis
              e possam ser arquivadas para uso futuro.
            </Description>
          </div>
          <div className="col text-center text-lg-end">
            <img
              src={RealTimeAudio}
              alt="Áudio em tempo real"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="d-flex d-lg-flex flex-column flex-lg-row row-lg-cols align-items-center my-5">
          <div className="col text-center text-lg-start order-2 order-lg-1">
            <img
              src={FeelingIdentifier}
              alt="Identificador de sentimentos"
              className="img-fluid"
            />
          </div>
          <div className="col text-center text-lg-end order-1 order-lg-2">
            <Title className="mb-3">
              Análise de sentimento a partir do áudio
            </Title>
            <Subtitle className="mb-5">Áudio pré-gravado</Subtitle>
            <Description>
              Encontre os momentos mais importantes em trechos de falas,
              diferencie falas positivas e negativas e tome decisões de negócios
              mais assertivas com uma compreensão mais profunda.
            </Description>
          </div>
        </div>
        <div className="d-block d-lg-flex row-lg-cols align-items-center my-5">
          <div className="col text-center text-lg-start">
            <Title className="mb-3">Transcrição de Áudio Assíncrono</Title>
            <Subtitle className="mb-5">Áudio pré-gravado</Subtitle>
            <Description>
              API de transcrição de voz assíncrona para áudio pré-gravado. Temos
              uma das melhores engines de reconhecimento de fala do mundo! O
              recurso speech-to-text assíncrono é um parceiro estratégico para o
              seu negócio. Esteja você extraindo insights de áudio ou
              transcrevendo conteúdo em escala.
            </Description>
          </div>
          <div className="col text-center text-lg-end">
            <img
              src={AsynchronousAudio}
              alt="Áudio em tempo real"
              className="img-fluid"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default memo(Solutions);
