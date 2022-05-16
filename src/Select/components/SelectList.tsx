import { Box, BoxProps, forwardRef } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useContext } from "react";
import { SelectContext } from "../context";

interface SelectListProps extends BoxProps {
  children: React.ReactNode;
  itemCount?: number;
}

const MotionBox = motion<BoxProps>(Box);

export const SelectList = forwardRef<SelectListProps, "div">((props, _ref) => {
  const { children, itemCount, ...rest } = props;
  const { isOpenDropdown, optionHeight } = useContext(SelectContext);

  const variant = {
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
      transition: {
        duration: 0.3,
      },
    },
  };

  var heightFromTop = 0;
  return (
    <AnimatePresence>
      {isOpenDropdown && (
        <MotionBox
          variants={variant}
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
            maxH={`calc(100vh - ${heightFromTop}px)`}
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
