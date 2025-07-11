'use client';

import React, { useRef } from "react";

interface CardProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  shadowColor?: string;
}

const Card: React.FC<CardProps> = ({ children, icon, style, className, shadowColor }) => {
  const shadowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Animation handlers
  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'translateY(-8px) scale(1.03)';
      cardRef.current.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)';
    }
    if (shadowRef.current) {
      shadowRef.current.style.transform = 'scale(0.96)';
      shadowRef.current.style.opacity = '0.85';
    }
  };
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
      cardRef.current.style.boxShadow = '';
    }
    if (shadowRef.current) {
      shadowRef.current.style.transform = '';
      shadowRef.current.style.opacity = '';
    }
  };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'block',
        overflow: 'visible',
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shadow/offset */}
      <div
        ref={shadowRef}
        aria-hidden
        style={{
          position: 'absolute',
          top: 14,
          left: 14,
          width: '100%',
          height: '100%',
          borderRadius: 28,
          background: shadowColor || 'var(--color-accent)',
          zIndex: 0,
          transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), opacity 0.25s cubic-bezier(.4,2,.6,1)',
        }}
      />
      {/* Main card */}
      <div
        ref={cardRef}
        style={{
          position: 'relative',
          zIndex: 1,
          background: '#fff',
          border: shadowColor ? '3px solid #111' : '3px solid #111',
          borderRadius: 28,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          padding: '2.2rem 1.5rem',
          minHeight: 180,
          minWidth: 280,
          maxWidth: 380,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'visible',
        }}
      >
        {icon && <div style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>{icon}</div>}
        {children}
      </div>
    </div>
  );
};

export default Card; 