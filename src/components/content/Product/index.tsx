import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FaFileAudio } from 'react-icons/fa';

import QRcode from 'assets/frame.svg';

import Pill from 'components/Pill';
import Section from 'components/Section';

import { Image, QRcodeBox, Pills, Title } from './styles';

const Product: React.FC = () => {
  return (
    <Section id="products" backgroundColor="dark-blue">
      <Container>
        <div className="align-items-center row mb-5">
          <div className="d-none d-lg-block col">
            <Image
              src="https://i2.wp.com/cbmostqi.com/wp-content/uploads/2021/05/Site_CBmostQI_LandingPage_11.05-07-1.png?w=284&ssl=1"
              alt="Identificador de idiomas"
            />
          </div>
          <div className="d-flex flex-column col justify-content-center">
            <div className="my-5 text-start">
              <Title className="title-section text-white">CheckSpeech AI</Title>
              <p className="subtitle-section text-secondary fs-6 mb-0 mt-5">
                O CheckSpeech AI é um conjunto de APIs de conversão de fala em
                textos, bem como a interpretação do sentimento dominante nos
                dizeres. Nossa solução é treinada em mais de 500.000 horas de
                áudios, transcritos por humanos de uma ampla variedade de
                idades, nacionalidades, sotaques e níveis de instruções A API é
                comercializada no modelo SAAS (software as a service).
              </p>
            </div>
            <Row className="row-cols-1 row-cols-sm-2 g-4 mb-5 px-5 px-sm-0">
              <Col className="d-flex align-items-center">
                <div>
                  <FaFileAudio size={35} color="#0693e3" />
                </div>
                <span className="flex-grow-1 text-white ps-2 fw-bold">
                  Identificação de Idiomas em áudios
                </span>
              </Col>
              <Col className="d-flex align-items-center">
                <div>
                  <FaFileAudio size={35} color="#0693e3" />
                </div>
                <span className="flex-grow-1 text-white ps-2 fw-bold">
                  Transcrição de áudio em tempo real
                </span>
              </Col>
              <Col className="d-flex align-items-center">
                <div>
                  <FaFileAudio size={35} color="#0693e3" />
                </div>
                <span className="flex-grow-1 text-white ps-2 fw-bold">
                  Análise de sentimento a partir do áudio
                </span>
              </Col>
              <Col className="d-flex align-items-center">
                <div>
                  <FaFileAudio size={35} color="#0693e3" />
                </div>
                <span className="flex-grow-1 text-white ps-2 fw-bold">
                  Transcrição de Áudio Assíncrono
                </span>
              </Col>
            </Row>
            <div className="d-flex flex-column flex-sm-row align-items-center mb-5">
              <Pills className="col-sm-6">
                <Pill text="Agilidade e rapidez" icon />
                <Pill text="Interface amigável" icon />
                <Pill text="Segurança" icon />
              </Pills>
              <div className="col-sm-6 d-none d-sm-block text-center">
                <QRcodeBox src={QRcode} alt="QR Code" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default memo(Product);
