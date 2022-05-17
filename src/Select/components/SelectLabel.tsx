import { FormLabel, FormLabelProps, forwardRef } from "@chakra-ui/react";
import React, { useRef } from "react";

interface SelectLabelProps extends FormLabelProps {
	children: React.ReactNode;
}

export const SelectLabel = forwardRef<SelectLabelProps, 'div'>(
	(props, _ref) => {
		const { children, ...rest } = props;
		const ref = useRef<HTMLDivElement>(null);
  return (
    <FormLabel px="4" fontSize="65%" {...rest}>
      {children}
    </FormLabel>
  );
});
