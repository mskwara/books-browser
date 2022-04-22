import PropTypes from 'prop-types';

const optionsShape = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })
);

export { optionsShape };
