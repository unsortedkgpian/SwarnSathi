'use client';

import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ 
  title, 
  subtitle, 
  bgColor = '#f8f9fa', 
  textColor = '#333' 
}) => {
  return (
    <div 
      className="page-title-section w-100" 
      style={{ 
        backgroundColor: bgColor,
        padding: '30px 0 20px',
        marginBottom: '30px',
        textAlign: 'center'
      }}
    >
      <div className="container">
        <h1 style={{ 
          color: textColor, 
          fontWeight: 600,
          marginBottom: subtitle ? '10px' : '0'
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ 
            color: textColor, 
            opacity: 0.8,
            fontSize: '18px'
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageTitle; 