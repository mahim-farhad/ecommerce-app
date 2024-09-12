import { createContext, useContext } from "react";

import { useFormContext } from "react-hook-form";

const errorText = "useFormField should be used within <FormField>";

const FormFieldContext = createContext({});

const FormItemContext = createContext({});

export function useFormField() {
  const fieldContext = useContext(FormFieldContext);

  const itemContext = useContext(FormItemContext);

  const {
    getFieldState,
    formState
  } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error(errorText);
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};

export function FormFieldProvider({ children, value }) {
  return (
    <FormFieldContext.Provider value={value}>
      {children}
    </FormFieldContext.Provider>
  );
};

export function FormItemProvider({ children, value }) {
  return (
    <FormItemContext.Provider value={value}>
      {children}
    </FormItemContext.Provider>
  );
};
