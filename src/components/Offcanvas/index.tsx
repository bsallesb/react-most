import { memo } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

import Pill from 'components/Pill';

import { OffCanvas } from './styles';

interface IMenuOffCanvasProps {
  show?: boolean;
  onHide: () => void;
}

const MenuOffcanvas: React.FC<IMenuOffCanvasProps> = ({
  show = false,
  onHide,
}) => {
  return (
    <OffCanvas className="shadow" show={show} onHide={onHide} backdrop>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="px-2 text-white fs-3">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Pill
          text="Soluções"
          id="#solutions"
          background="blue"
          className="shadow text-center fs-5"
          onClick={onHide}
        />
        <Pill
          text="Clientes"
          id="#our-clients"
          background="blue"
          className="shadow text-center fs-5"
          onClick={onHide}
        />
        <Pill
          text="Preços"
          id="#prices"
          background="blue"
          className="shadow text-center fs-5"
          onClick={onHide}
        />
        <Pill
          text="Contato"
          id="#contact"
          background="blue"
          className="shadow text-center fs-5"
          onClick={onHide}
        />
      </Offcanvas.Body>
    </OffCanvas>
  );
};

export default memo(MenuOffcanvas);
