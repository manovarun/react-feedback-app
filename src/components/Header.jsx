import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text, backgroundColor, color }) => {
  return (
    <header style={{ backgroundColor, color }}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
