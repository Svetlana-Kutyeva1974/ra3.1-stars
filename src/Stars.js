
import React from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

export default function Stars(props) {
  const { count } = props;
  
  return (
    <ul className="card-body-stars u-clearfix">
     {!(count < 1 || count > 5 || typeof count !== 'number') && Array(count).fill(null).map((u, idx) => <Star key={idx} />)}
    </ul>
  )

}

Stars.defaultProps = {
  count: 0
};

Stars.propTypes = {
  count: PropTypes.number
}
