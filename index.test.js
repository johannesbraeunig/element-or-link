import React from 'react';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';

import { ElementOrLink } from './';

describe('<ElementOrLink />', () => {
  it('renders a div', () => {
    const { container } = render(<ElementOrLink>Hey!</ElementOrLink>);
    expect(container).toMatchSnapshot();
  });

  it('renders a span', () => {
    const { container } = render(
      <ElementOrLink element="span">Hey!</ElementOrLink>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders a link', () => {
    const { container } = render(
      <StaticRouter>
        <ElementOrLink to="/hello">Hey!</ElementOrLink>
      </StaticRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders a div even if a link is provided', () => {
    const { container } = render(
      <StaticRouter>
        <ElementOrLink to="/hello" displayElement={true}>
          Hey!
        </ElementOrLink>
      </StaticRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders a div if link is an empty string', () => {
    const { container } = render(
      <StaticRouter>
        <ElementOrLink to="">Hey!</ElementOrLink>
      </StaticRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
