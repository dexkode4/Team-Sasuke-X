import { createContext, useCallback, useMemo, useState } from 'react';

export type Value = string | number;
export type Variant = 'native' | 'outline' | 'filled' | 'flushed' | 'unstyled';

type SelectContextState = {
	toggleDropdown: (value?: boolean) => void;
	handleDisplayValue: (value: React.ReactNode) => void;
	handleValue: (value: Value) => void;
	handleSelectOptionHeight: (value: number) => void;
	handleVariant: (variant: Variant) => void;

	isOpenDropdown: boolean;
	displayValue: React.ReactNode | null;
	value: Value;
	optionHeight: number;
	variant: Variant;
};

const contextDefaultValues: SelectContextState = {
	toggleDropdown: () => {},
	handleDisplayValue: () => {},
	handleValue: () => {},
	handleSelectOptionHeight: () => {},
	handleVariant: () => {},
	
	isOpenDropdown: false,
	displayValue: null,
	value: '',
	optionHeight: 0,
	variant: 'outline'
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
	const [variant, setVariant] = useState<Variant>(contextDefaultValues.variant);

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

	const handleVariant = useCallback((value: Variant) => {
		setVariant(value);
		console.log('hey')
	}, []);


	const contextValues = useMemo(
		() => ({
			handleDisplayValue,
			handleSelectOptionHeight,
			handleVariant,
			handleValue,
			toggleDropdown,
			
			displayValue,
			value,
			isOpenDropdown,
			optionHeight,
			variant
		}),
		[displayValue, handleDisplayValue, handleSelectOptionHeight, handleValue, handleVariant, isOpenDropdown, optionHeight, toggleDropdown, value, variant],
	);

	return <Provider value={contextValues}>{children}</Provider>;
};
