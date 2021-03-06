import { Box, BoxProps, forwardRef, List, ListProps, Select } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { Value } from '..';
import { SelectContext } from '../context';
import { Modify } from './SelectButton';

type SelectListProps = Modify<
	ListProps,
	{
		children: React.ReactNode;
		onSelect: (value: Value) => void;
	}
>;

const MotionBox = motion<BoxProps>(Box);

export const SelectList = forwardRef<SelectListProps, 'div'>((props, _ref) => {
	const { children, onChange, onSelect, ...rest } = props;
	const { isOpenDropdown, optionHeight, variant, placeholder, value, itemCount } =
		useContext(SelectContext);

  const dropdownVariant = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 5,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		onSelect(value);
	};

  const NativeSelect = () => (
    <Select onChange={handleChange}>
      <option>{placeholder}</option>
      {children}
    </Select>
  );
  var heightFromTop = 0;

	useEffect(() => {
		onSelect(value);
	}, [onSelect, value]);

  return variant === "native" ? (
    <NativeSelect />
  ) : (
    <AnimatePresence>
      {isOpenDropdown && (
        <MotionBox
          variants={dropdownVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <List
            ref={(el) => {
              if (!el) return;
              heightFromTop =
                el.getBoundingClientRect().top +
                document.documentElement.scrollTop;
            }}
            bg="white"
            shadow="lg"
            overflow="auto"
            maxH={`calc(60vh - ${heightFromTop}px)`}
            {...((itemCount) && {
              h: `${itemCount * optionHeight}px`,
            })}
            {...rest}
            role="listbox"
          >
            {children}
          </List>
        </MotionBox>
      )}
    </AnimatePresence>
  );
});
