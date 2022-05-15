import React from 'react';

interface SelectListProps {
    children: React.ReactNode;
}

export const SelectList = ({ children }:SelectListProps) => {
  return (
    <div>
        {children}
    </div>
  )
}
