import React from 'react';

const BrandText = ({ text, className = '' }) => {
    if (typeof text !== 'string') return text;

    const parts = text.split('ICON');
    return (
        <span className={className}>
            {parts.map((part, i) => (
                <React.Fragment key={i}>
                    {part}
                    {i < parts.length - 1 && <span className="font-brand">ICON</span>}
                </React.Fragment>
            ))}
        </span>
    );
};

export default BrandText;
