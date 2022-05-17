import { FormLabel, FormLabelProps, forwardRef } from "@chakra-ui/react";
import React from "react";

interface SelectLabelProps extends FormLabelProps {
	children: React.ReactNode;
}

export const SelectLabel = forwardRef<SelectLabelProps, 'div'>(
	(props, _ref) => {
		const { children, ...rest } = props;
  return (
    <FormLabel px="4" fontSize="65%" {...rest}>
      {children}
    </FormLabel>
  );
});
