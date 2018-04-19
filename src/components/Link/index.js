import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

export default function Link({
  link, size, type, text,
}) {
  const typeClassName = type ? `Link_type_${type}` : '';
  const sizeClassName = size ? `Link_size_${size}` : 'Link_size_medium';
  return <a
    href = {link === 'Упс что-то пошло не так :(' ? '/' : 'link'}
    className = {`Link ${typeClassName} ${sizeClassName}`}
  >
    {text || `${link}`}
  </a>;
}

Link.defaultProps = {
  link: 'Упс что-то пошло не так :(',
};

Link.propTypes = {
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};
