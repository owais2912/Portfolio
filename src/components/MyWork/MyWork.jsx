import React from 'react';
import './MyWork.css';
import theme_pattern from '@assets/theme_pattern.svg';
import { mywork_data } from '@utils/constants';
import arrow_icon from '@assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-card">
              <img src={work.w_img} alt={work.w_name} className="work-image" />
              <div className="image-overlay">
                <p className="work-name">{work.w_name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
