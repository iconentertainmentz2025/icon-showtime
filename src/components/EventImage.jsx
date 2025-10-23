import React from 'react';

const EventImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    width={800}
    height={600}
    className={className}
    loading="lazy"
  />
);