import { memo, ReactElement } from 'react';

interface ISocialMediaProps {
  icon: ReactElement;
  link: string;
  name?: string;
}

const SocialMedia: React.FC<ISocialMediaProps> = ({ icon, link, name }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="mx-2 my-2">
      {icon} <span className="text-white fs-8 ps-2">{name}</span>
    </a>
  );
};

export default memo(SocialMedia);
