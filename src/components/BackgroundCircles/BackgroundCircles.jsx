import React from 'react';
import { bgCircles } from './BackgroundCircles.module.scss';

const BackgroundCircles = ({ children }) => (
  <div className={bgCircles}>{children}</div>
);

export default BackgroundCircles;
