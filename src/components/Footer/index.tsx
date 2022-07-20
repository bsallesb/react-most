import { memo } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container } from 'react-bootstrap';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsWhatsapp,
} from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import Logo from 'assets/logo-most.png';

import List from 'components/List';
import Pill from 'components/Pill';
import SocialMedia from 'components/SocialMedia';

import { Creator, MainFooter } from './styles';

const Footer: React.FC = () => {
  return (
    <MainFooter>
      <Container>
        <div className="d-md-flex row justify-content-between align-items-start py-1">
          <div className="col-12 col-sm-6 col-lg-3 text-center text-sm-start px-3 mb-3 mb-lg-0">
            <AnchorLink href="#products" offset="100">
              <img src={Logo} alt="Logo Most" />
            </AnchorLink>
            <p className="text-white fs-8 mt-3">
              A MOST tem por objetivo levar tecnologia e inteligência
              operacional para as grandes e médias empresas.
            </p>
            <p className="text-white fs-8">
              É provedora de soluções de captura e tratamento de dados e imagens
              por meio de tecnologia de digitalização e reconhecimento de
              caracteres gráficos. Desenvolve suas soluções com aplicação de
              Inteligência Artificial e é também fornecedora de plataforma de
              assinatura digital.
            </p>
          </div>
          <div className="d-none d-sm-block col-12 col-sm-6 col-lg-3 text-center">
            <img
              src="https://most.com.br/wp-content/uploads/2020/04/selo-great-place-to-work-most-1.png"
              alt="Selo Great place to work"
            />
          </div>
          <ul className="d-none d-md-block col-md-6 col-lg-3 m-0 mb-3 mb-lg-0">
            <li className="text-white list-unstyled px-2 fs-5 fw-bold">
              Navegue aqui
            </li>
            <List link="#solutions" name="Soluções" />
            <List link="#our-clients" name="Clientes" />
            <List link="#prices" name="Preços" />
            <List link="#contact" name="Contato" />
          </ul>
          <ul className="d-block d-md-none w-100 m-0 text-center mb-3">
            <li className="text-white list-unstyled px-2 fs-5 fw-bold">
              Navegue aqui
            </li>
            <Pill text="Soluções" id="Solutions" />
            <Pill text="Clientes" id="Clients" />
            <Pill text="Preços" id="Prices" />
            <Pill text="Contato" id="Contact" />
          </ul>
          <div className="d-block d-sm-none col-12 text-center mb-3">
            <img
              src="https://most.com.br/wp-content/uploads/2020/04/selo-great-place-to-work-most-1.png"
              alt="Selo Great place to work"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="d-flex flex-column align-items-center">
              <ul className="d-flex flex-column p-0">
                <li className="text-white text-center text-sm-start list-unstyled px-2 fs-5 fw-bold">
                  Contato
                </li>
                <SocialMedia
                  icon={<BsWhatsapp color="#1EB9BA" size={18} />}
                  link="https://wa.me/5535999448781"
                  name="(35) 9 9944-8781"
                />
                <SocialMedia
                  icon={<HiOutlineMail color="#1EB9BA" size={18} />}
                  link="mailto:osalesbreno@gmail.com?subject=Projeto most"
                  name="osalesbreno@gmail.com"
                />
              </ul>
              <ul className="p-0">
                <SocialMedia
                  icon={<BsInstagram color="#1EB9BA" size={18} />}
                  link="https://www.instagram.com/"
                />
                <SocialMedia
                  icon={<BsLinkedin color="#1EB9BA" size={18} />}
                  link="https://www.linkedin.com/"
                />
                <SocialMedia
                  icon={<BsFacebook color="#1EB9BA" size={18} />}
                  link="https://www.facebook.com/"
                />
                <SocialMedia
                  icon={<BsYoutube color="#1EB9BA" size={18} />}
                  link="https://www.youtube.com/"
                />
              </ul>
            </div>
          </div>
        </div>
        <h2 className="fs-8 text-center text-white m-0 pt-3">
          create by:{' '}
          <Creator
            href="https://www.linkedin.com/in/brenosales/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Breno Sales
          </Creator>
        </h2>
      </Container>
    </MainFooter>
  );
};

export default memo(Footer);
