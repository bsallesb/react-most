import { memo } from 'react';

import { SectionContainer } from './styles';

interface IMyComponentProps {
  id?: string;
  backgroundColor?: 'dark-blue' | 'light-green';
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<IMyComponentProps> = ({
  id,
  backgroundColor = 'transparent',
  children,
  className = '',
}) => {
  return (
    <SectionContainer className={`bg-${backgroundColor} ${className}`} id={id}>
      {children}
    </SectionContainer>
  );
};

export default memo(Section);
