import { memo, useCallback, useState } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Stack } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

import Logo from 'assets/logo-most.png';

import List from 'components/List';
import MenuOffcanvas from 'components/Offcanvas';
import SocialMedia from 'components/SocialMedia';

import { MainHeader } from './styles';

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMenu = useCallback(
    () => setShowMobileMenu(!showMobileMenu),
    [setShowMobileMenu, showMobileMenu],
  );

  return (
    <MainHeader className="shadow">
      <MenuOffcanvas show={showMobileMenu} onHide={handleToggleMenu} />
      <Container>
        <Stack direction="horizontal" className="justify-content-between py-1">
          <AnchorLink href="#products" offset={100}>
            <img src={Logo} alt="Logo Most" className="img-fluid" />
          </AnchorLink>
          <ul className="d-none d-xl-flex m-0">
            <List link="#solutions" name="Soluções" icon />
            <List link="#our-clients" name="Clientes" icon />
            <List link="#prices" name="Preços" icon />
            <List link="#contact" name="Contato" icon />
          </ul>
          <div className="d-none d-xl-flex justify-content-center">
            <SocialMedia
              icon={<BsInstagram color="white" size={18} />}
              link="https://www.instagram.com/"
            />
            <SocialMedia
              icon={<BsLinkedin color="white" size={18} />}
              link="https://www.linkedin.com/"
            />
            <SocialMedia
              icon={<BsFacebook color="white" size={18} />}
              link="https://www.facebook.com/"
            />
            <SocialMedia
              icon={<BsYoutube color="white" size={18} />}
              link="https://www.youtube.com/"
            />
          </div>
          <button
            type="button"
            className="d-block d-xl-none bg-transparent border-0"
            onClick={handleToggleMenu}
          >
            <BiMenu color="white" size={40} />
          </button>
        </Stack>
      </Container>
    </MainHeader>
  );
};

export default memo(Header);
