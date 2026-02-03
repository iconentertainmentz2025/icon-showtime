import React from 'react';

export const Logo = ({ variant = 'main', className = '', width = 200 }) => {
  const logoMap = {
    main: '/images/ICON_Logos/Asset_ICON.png',
    black: '/images/ICON_Logos/Asset_ICON_Black.png',
    white: '/images/ICON_Logos/Asset_ICON_White.png'
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