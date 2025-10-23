import React from 'react';

export const Logo = ({ variant = 'main', className = '', width = 200 }) => {
  const logoMap = {
    main: '/Asset_ICON.png',
    black: '/Asset_ICON_Black.png',
    white: '/Asset_ICON_White.png'
  };

  const imagePath = logoMap[variant] || logoMap.main;

  return (
    <img
      src={imagePath}
      alt={`ICON Entertainment ${variant} logo`}
      className={className}
      width={width}
      height="auto"
    />
  );
};

export default Logo;