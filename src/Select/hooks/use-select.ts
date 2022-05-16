import { useContext } from 'react';
import { SelectContext } from '../context';

export const useSelect = () => {
    const { isOpenDropdown } = useContext(SelectContext);
    return {isOpenDropdown }
};
