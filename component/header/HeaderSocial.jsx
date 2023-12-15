import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMediumCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a
        href="https://www.linkedin.com/in/yun-ting-chiou-2210bb206/"
        target="_blank"
      >
        <IconContext.Provider value={{ className: 'social_icon' }}>
          <AiFillLinkedin />
        </IconContext.Provider>
      </a>
      <a href="https://github.com/clairefantastic" target="_blank">
        <IconContext.Provider value={{ className: 'social_icon' }}>
          <AiFillGithub />
        </IconContext.Provider>
      </a>
    </div>
  );
};

export default HeaderSocial;
