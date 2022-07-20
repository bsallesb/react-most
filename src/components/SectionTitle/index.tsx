import { memo } from 'react';

import { Container } from 'react-bootstrap';

import { Title } from './styles';

interface IPillProps {
  title: string;
  subtitle?: string;
  color?: 'primary' | 'white' | 'secondary';
  subtitleColor?: 'primary' | 'white' | 'secondary';
  fonteSizeSubtitle?: number;
  className?: string;
}

const SectionTitle: React.FC<IPillProps> = ({
  title,
  subtitle,
  color = 'primary',
  subtitleColor = 'primary',
  fonteSizeSubtitle = 5,
  className,
}) => {
  return (
    <Container className={className}>
      <Title className={`title-section text-${color}`}>{title}</Title>
      {subtitle && (
        <p
          className={`subtitle-section text-${subtitleColor} fs-${fonteSizeSubtitle} mb-0 mt-5`}
        >
          {subtitle}
        </p>
      )}
    </Container>
  );
};

export default memo(SectionTitle);
