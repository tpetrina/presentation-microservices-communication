import * as React from 'react';

function resolveImage(src) {
  return require(`../${src}`);
}

export default function LocalImage({
  src,
  ...props
}) {
  return (
    <img
      src={resolveImage(src)}
      {...props}
    />
  );
}
