import { createContext, useCallback, useMemo, useState } from 'react';

export type Value = string | number;

type SelectContextState = {
	toggleDropdown: (value?: boolean) => void;
	handleDisplayValue: (value: React.ReactNode) => void;
	handleValue: (value: Value) => void;
	handleSelectOptionHeight: (value: number) => void;

	isOpenDropdown: boolean;
	displayValue: React.ReactNode | null;
	value: Value;
	optionHeight: number;
};

const contextDefaultValues: SelectContextState = {
	toggleDropdown: () => {},
	handleDisplayValue: () => {},
	handleValue: () => {},
	handleSelectOptionHeight: () => {},
	
	isOpenDropdown: false,
	displayValue: null,
	value: '',
	optionHeight: 0,
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

	const [optionHeight, setOptionHeight] = useState<number>(contextDefaultValues.optionHeight);

	const toggleDropdown = useCallback((value?: boolean) => {
		setIsOpenDropdown((prev) => value ?? !prev);
	}, []);

	const handleDisplayValue = useCallback((value: React.ReactNode) => {
		setDisplayValue(value);
	}, []);

	const handleValue = useCallback((value: Value) => {
		setValue(value);
	}, []);

	const handleSelectOptionHeight = useCallback((value: number) => {
		setOptionHeight(value);
	}, []);


	const contextValues = useMemo(
		() => ({
			isOpenDropdown,
			toggleDropdown,
			handleDisplayValue,
			displayValue,
			value,
			handleValue,
			optionHeight,
			handleSelectOptionHeight,
		}),
		[displayValue, handleDisplayValue, handleSelectOptionHeight, handleValue, isOpenDropdown, optionHeight, toggleDropdown, value],
	);

	return <Provider value={contextValues}>{children}</Provider>;
};
