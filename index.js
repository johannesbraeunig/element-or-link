import React from 'react';
import { Link } from 'react-router-dom';

const ElementOrLink = ({
  to,
  displayElement = false,
  element = 'span',
  ...props
}) => {
  const Element = element;

  if (to && to.length > 0 && !displayElement) {
    return <Link to={to} {...props} />;
  }

  return <Element {...props} />;
};

export { ElementOrLink };
