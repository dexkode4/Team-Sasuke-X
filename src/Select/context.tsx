import { createContext, useCallback, useMemo, useState } from 'react';

export type Value = string | number;

type SelectContextState = {
	isOpenDropdown: boolean;
	toggleDropdown: () => void;
	displayValue: React.ReactNode | null;
	handleDisplayValue: (value: React.ReactNode) => void;
	handleValue: (value: Value) => void;
	value: Value;
};

const contextDefaultValues: SelectContextState = {
	isOpenDropdown: false,
	toggleDropdown: () => {},
	handleDisplayValue: () => {},
	handleValue: () => {},
	displayValue: null,
	value: '',
};

export const SelectContext =
	createContext<SelectContextState>(contextDefaultValues);
const { Provider } = SelectContext;

type SelectProviderProps = {
	children: React.ReactNode;
};

export const SelectProvider = ({ children }: SelectProviderProps) => {
	const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(
		contextDefaultValues.isOpenDropdown,
	);
	const [displayValue, setDisplayValue] = useState<React.ReactNode>(
		contextDefaultValues.displayValue,
	);
	const [value, setValue] = useState<Value>(contextDefaultValues.value);

	const toggleDropdown = useCallback(() => {
		setIsOpenDropdown(!isOpenDropdown);
	}, [isOpenDropdown]);

	const handleDisplayValue = useCallback((value: React.ReactNode) => {
		setDisplayValue(value);
	}, []);

	const handleValue = useCallback((value: Value) => {
		setValue(value);
	}, []);

	const contextValues = useMemo(
		() => ({
			isOpenDropdown,
			toggleDropdown,
			handleDisplayValue,
			displayValue,
			value,
			handleValue,
		}),
		[
			displayValue,
			handleDisplayValue,
			handleValue,
			isOpenDropdown,
			toggleDropdown,
			value,
		],
	);

	return <Provider value={contextValues}>{children}</Provider>;
};
