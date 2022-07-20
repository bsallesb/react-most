import { memo } from 'react';

import { Container } from 'react-bootstrap';

import { SubTitle, Title } from './styles';

interface IPillProps {
  title: string;
  subtitle?: string;
  color?: 'primary' | 'white' | 'secondary';
  subtitleColor?: 'primary' | 'white' | 'secondary';
  className?: string;
}

const SectionTitle: React.FC<IPillProps> = ({
  title,
  subtitle,
  color = 'primary',
  subtitleColor = 'primary',
  className,
}) => {
  return (
    <Container className={className}>
      <Title className={`title-section text-${color}`}>{title}</Title>
      {subtitle && (
        <SubTitle
          className={`subtitle-section text-${subtitleColor} mb-0 mt-5`}
        >
          {subtitle}
        </SubTitle>
      )}
    </Container>
  );
};

export default memo(SectionTitle);
