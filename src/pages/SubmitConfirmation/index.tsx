import { memo } from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { Main } from './styled';

const SubmitConfirmation: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Main className="flex-grow-1">
        <Container>
          <h2 className="text-center text-primary fw-bold fs-7">Obrigado</h2>
          <p className="text-center mb-5">Em breve retornaremos seu contato!</p>
          <div className="d-flex justify-content-center mb-4">
            <Link to="/" className="btn bg-primary">
              <p className="text-white m-0">Voltar</p>
            </Link>
          </div>
        </Container>
      </Main>
      <Footer />
    </div>
  );
};

export default memo(SubmitConfirmation);
