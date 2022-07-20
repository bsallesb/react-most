import { memo } from 'react';

import { BsFillCartCheckFill } from 'react-icons/bs';

import { Section } from './styles';

interface IPriceCardItem {
  title: string;
  description?: string;
}

const PriceCardItem: React.FC<IPriceCardItem> = ({ title, description }) => {
  return (
    <Section className="d-flex align-items-center border-bottom border-2">
      <div>
        <BsFillCartCheckFill size={20} />
      </div>
      <div className="flex-grow-1 py-3 text-primary">
        <h3 className="m-0 fs-6 fw-bold">{title}</h3>
        {description && (
          <p className="m-0 text-muted fs-8 mt-2">{description}</p>
        )}
      </div>
    </Section>
  );
};

export default memo(PriceCardItem);
