import { memo, ReactNode } from 'react';

import { Stack } from 'react-bootstrap';

import { getDecimals } from 'helpers';

import { Price, Header } from './styles';

interface IPriceCardProps {
  title: string;
  children: ReactNode;
  monthlyPrice?: number;
  anualPrice?: number;
  className?: string;
}

const PriceCard: React.FC<IPriceCardProps> = ({
  title,
  children,
  monthlyPrice,
  anualPrice,
  className,
}) => {
  return (
    <div
      className={`d-flex flex-column ${className} text-center w-100 shadow px-0`}
    >
      <Header className="py-3">
        <h2 className="text-white fw-bold m-0">{title}</h2>
      </Header>
      <div className="d-flex flex-column flex-grow-1 p-4 pt-0">
        {children}
        {monthlyPrice && anualPrice && (
          <Stack direction="horizontal" gap={2} className="mt-auto pt-4">
            <Price className="flex-grow-1 py-2">
              <p className="d-flex justify-content-center align-items-center fs-4 fw-bold m-0">
                R$ {Math.trunc(monthlyPrice)}
                <span className="fs-8 pb-2">{`,${String(
                  getDecimals(monthlyPrice),
                ).padEnd(2, '0')}`}</span>
              </p>
              <span className="fs-8 ps-5">por mês</span>
            </Price>
            <Price className="flex-grow-1 py-2">
              <p className="d-flex justify-content-center align-items-center fs-4 fw-bold m-0">
                R$ {Math.trunc(anualPrice)}
                <span className="fs-8 pb-2">{`,${String(
                  getDecimals(anualPrice),
                ).padEnd(2, '0')}`}</span>
              </p>
              <span className="fs-8 ps-5">por ano</span>
            </Price>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default memo(PriceCard);
