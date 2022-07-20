import { memo } from 'react';

import { FaRegFileAudio } from 'react-icons/fa';

import { BorderPill } from './styles';

interface IPillProps {
  text: string;
  id?: string;
  icon?: boolean;
  background?: string;
  className?: string;
  onClick?: () => void;
}

const Pill: React.FC<IPillProps> = ({
  text,
  id,
  icon,
  background = 'black',
  className = '',
  onClick,
}) => {
  return (
    <BorderPill
      href={id}
      className={`d-flex py-2 bg-${background} ${className} text-white my-2 align-items-center text-decoration-none`}
      offset={100}
      onClick={() => onClick?.()}
    >
      {icon && (
        <div className="ms-4 me-2">
          <FaRegFileAudio size={30} color="#0693e3" />
        </div>
      )}
      <span className="ps-1 flex-grow-1 pe-4 pe-sm-0">{text}</span>
    </BorderPill>
  );
};

export default memo(Pill);
