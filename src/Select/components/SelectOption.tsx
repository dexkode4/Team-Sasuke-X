import React from 'react';

interface SelectOptionProps {
	children: React.ReactNode;
}

export const SelectOption = ({ children }: SelectOptionProps) => {
	return <div>{children}</div>;
};
