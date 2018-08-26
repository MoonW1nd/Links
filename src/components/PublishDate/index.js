import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

export default function PublishDate({ date }) {
  return <time className = 'PublishDate'>
    {convertDate(date)}
  </time>;
}

function convertDate(inputDate) {
  function pad(s) { return (s < 10) ? `0${s}` : s; }
  const date = new Date(inputDate);
  return [pad(date.getDate()), pad(date.getMonth() + 1), date.getFullYear()].join('.');
}

PublishDate.propTypes = {
  date: PropTypes.string,
};
