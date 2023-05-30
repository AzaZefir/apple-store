import React from 'react';
import scss from './styles/CustomDropdown.module.scss'

export const CustomDropdown = ({img,text}) => {
  return (
    <div className={`${scss.popup} d-flex gap-2`}>
      <img src={img} alt="phone" title="phone" />
      <select>
        <option>{text}</option>
      </select>
    </div>
  );
};
