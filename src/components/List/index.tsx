import { memo } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface IListProps {
  name: string;
  link: string;
  icon?: boolean;
}

const List: React.FC<IListProps> = ({ name, link, icon }) => {
  return (
    <li className="list-unstyled px-4 my-3">
      <AnchorLink
        href={link}
        offset="100"
        className="text-decoration-none text-white"
      >
        {icon && <MdKeyboardArrowRight size={26} />} {name}
      </AnchorLink>
    </li>
  );
};

export default memo(List);
