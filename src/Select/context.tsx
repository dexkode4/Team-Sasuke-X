import { createContext, useCallback, useMemo, useState } from 'react';
import { Value, Variant } from '.';

type SelectContextState = {
	toggleDropdown: (value?: boolean) => void;
	handleDisplayValue: (value: React.ReactNode) => void;
	handleValue: (value: Value) => void;
	handleSelectOptionHeight: (value: number) => void;
	handleVariant: (variant: Variant) => void;
	handleLoading: (value: boolean) => void;
	handleIsDisabled: (value: boolean) => void;
	handlePlaceholder: (value: string) => void;
	handleItemCount: (value: number) => void;

	isOpenDropdown: boolean;
	displayValue: React.ReactNode | null;
	value: Value;
	optionHeight: number;
	variant: Variant;
	isLoading: boolean;
	isDisabled: boolean;
	placeholder:string;
	itemCount: number | null;
};

const contextDefaultValues: SelectContextState = {
	toggleDropdown: () => {},
	handleDisplayValue: () => {},
	handleValue: () => {},
	handleSelectOptionHeight: () => {},
	handleItemCount: () => {},
	handleVariant: () => {},
	handleLoading: () => {},
	handlePlaceholder: () => {},
	handleIsDisabled: () => {},
	
	isOpenDropdown: false,
	isLoading: false,
	isDisabled: false,
	displayValue: null,
	value: '',
	optionHeight: 0,
	itemCount: null,
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
	const [isDisabled, setIsDisabled] = useState<boolean>(contextDefaultValues.isDisabled);
	const [placeholder, setPlaceholder] = useState<string>(contextDefaultValues.placeholder);
	const [itemCount, setItemCount] = useState<number|null>(contextDefaultValues.itemCount);

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

	const handleItemCount = useCallback((value: number) => {
		setItemCount(value);
	}, []);

	const handleIsDisabled = useCallback((value: boolean) => {
		setIsDisabled(value);
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
			handleItemCount,
			handleIsDisabled,
			
			displayValue,
			value,
			isOpenDropdown,
			optionHeight,
			variant,
			isLoading,
			placeholder,
			itemCount,
			isDisabled
		}),
		[displayValue, handleDisplayValue, handleIsDisabled, handleItemCount, handleLoading, handlePlaceholder, handleSelectOptionHeight, handleValue, handleVariant, isDisabled, isLoading, isOpenDropdown, itemCount, optionHeight, placeholder, toggleDropdown, value, variant],
	);

	return <Provider value={contextValues}>{children}</Provider>;
};
