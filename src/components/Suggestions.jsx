import React from 'react';

const Suggestions = props => {
  const { results } = props;
  const options = results.map(r => <li key={r.id}>{r.name}</li>);
  return <ul>{options}</ul>;
};

export default Suggestions;
