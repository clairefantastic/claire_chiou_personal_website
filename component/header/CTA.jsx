import React from 'react';
import claire_cv from '../../asset/CV_Yun-Ting Chiou.pdf';
const CTA = () => {
  return (
    <div className="cta">
      <a href={claire_cv} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
