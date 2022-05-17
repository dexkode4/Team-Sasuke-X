import { createContext, useCallback, useMemo, useState } from 'react';

export type Value = string | number;
export type Variant = 'native' | 'outline' | 'filled' | 'flushed' | 'unstyled';

type SelectContextState = {
	toggleDropdown: (value?: boolean) => void;
	handleDisplayValue: (value: React.ReactNode) => void;
	handleValue: (value: Value) => void;
	handleSelectOptionHeight: (value: number) => void;
	handleVariant: (variant: Variant) => void;
	handleLoading: (value: boolean) => void;
	handlePlaceholder: (value: string) => void;

	isOpenDropdown: boolean;
	displayValue: React.ReactNode | null;
	value: Value;
	optionHeight: number;
	variant: Variant;
	isLoading: boolean;
	placeholder:string;
};

const contextDefaultValues: SelectContextState = {
	toggleDropdown: () => {},
	handleDisplayValue: () => {},
	handleValue: () => {},
	handleSelectOptionHeight: () => {},
	handleVariant: () => {},
	handleLoading: () => {},
	handlePlaceholder: () => {},
	
	isOpenDropdown: false,
	isLoading: false,
	displayValue: null,
	value: '',
	optionHeight: 0,
	variant: 'outline',
	placeholder: ''
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

	const [isLoading, setIsLoading] = useState<boolean>(contextDefaultValues.isLoading);
	const [placeholder, setPlaceholder] = useState<string>(contextDefaultValues.placeholder);

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
	}, []);

	const handleLoading = useCallback((value: boolean) => {
		setIsLoading(value);
	}, []);

	const handlePlaceholder = useCallback((value: string) => {
		setPlaceholder(value);
	}, []);


	const contextValues = useMemo(
		() => ({
			handleDisplayValue,
			handleSelectOptionHeight,
			handleVariant,
			handleValue,
			toggleDropdown,
			handleLoading,
			handlePlaceholder,
			
			displayValue,
			value,
			isOpenDropdown,
			optionHeight,
			variant,
			isLoading,
			placeholder
		}),
		[displayValue, handleDisplayValue, handleLoading, handlePlaceholder, handleSelectOptionHeight, handleValue, handleVariant, isLoading, isOpenDropdown, optionHeight, placeholder, toggleDropdown, value, variant],
	);

	return <Provider value={contextValues}>{children}</Provider>;
};
