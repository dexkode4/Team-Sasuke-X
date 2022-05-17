import { Box, BoxProps, forwardRef, Select } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { SelectContext, Value } from "../context";
import { Modify } from "./SelectButton";

type SelectListProps = Modify<
  BoxProps,
  {
    children: React.ReactNode;
    itemCount?: number;
    onChange?: (value: Value) => void;
  }
>;

const MotionBox = motion<BoxProps>(Box);

export const SelectList = forwardRef<SelectListProps, "div">((props, _ref) => {
  const { children, itemCount, onChange, ...rest } = props;
  const { isOpenDropdown, optionHeight, variant, placeholder } =
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
    onChange && onChange(value);
  };

  const NativeSelect = () => (
    <Select onChange={handleChange}>
      <option>{placeholder}</option>
      {children}
    </Select>
  );
  var heightFromTop = 0;

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
          <Box
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
            {...(itemCount && {
              h: `${itemCount * optionHeight}px`,
            })}
            {...rest}
          >
            {children}
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  );
});
