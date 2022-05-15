import { createContext, FC, useCallback, useMemo, useState } from 'react';

type SelectContextState = {
	isOpenDropdown: boolean;
    toggleDropdown: () => void;
};

const contextDefaultValues: SelectContextState = {
	isOpenDropdown: false,
    toggleDropdown: () => {}
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

    const toggleDropdown = useCallback(() => {
        setIsOpenDropdown(!isOpenDropdown)
    },[isOpenDropdown])

	const contextValues = useMemo(
		() => ({
			isOpenDropdown,
            toggleDropdown
		}),
		[isOpenDropdown, toggleDropdown],
	);

	return <Provider value={contextValues}>{children}</Provider>;
};
