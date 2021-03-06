import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

export default function YouTubeFrame({ tags, link }) {
  if (tags.indexOf('youTube') !== -1 && link) {
    const cutLink = /https:\/\/(www\.youtube\.com|youtu\.be)/gi.test(link) ?
      /https:\/\/(www\.youtube\.com|youtu\.be)\/(embed\/)?(.*)/gi.exec(link)[3] :
      null;

    if (cutLink) {
      return <div className='YouTubeFrame'>
        <iframe
          className='YouTubeFrame-IFrame'
          src={`https://www.youtube.com/embed/${cutLink}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>;
    }
    return <div>
        { 'Упс что-то пошло не так! :(' }
      </div>;
  }
  return null;
}

YouTubeFrame.propTypes = {
  tags: PropTypes.array,
  link: PropTypes.string,
};
