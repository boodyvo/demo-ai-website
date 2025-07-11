import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, icon, style, ...props }) => {
  return (
    <div style={{
      display: 'inline-block',
      position: 'relative',
      minWidth: 120,
      minHeight: 44,
    }}>
      {/* Bottom layer (shadow/offset) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 6,
          left: 6,
          width: '100%',
          height: '100%',
          borderRadius: 999,
          background: 'var(--color-accent-dark)',
          zIndex: 0,
        }}
      />
      {/* Top layer (main button) */}
      <button
        {...props}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'var(--color-accent)',
          color: '#111',
          fontWeight: 600,
          fontSize: '1.1rem',
          padding: '0.7rem 1.7rem',
          borderRadius: 999,
          border: '2px solid var(--color-border)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          position: 'relative',
          zIndex: 1,
          cursor: 'pointer',
          transition: 'background 0.18s',
          ...style,
        }}
      >
        {icon && <span style={{ fontSize: '1.2em', display: 'flex', alignItems: 'center' }}>{icon}</span>}
        {children}
      </button>
    </div>
  );
};

export default Button; 