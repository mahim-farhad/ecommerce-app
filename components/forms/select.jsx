import { forwardRef } from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import PropTypes from "prop-types";

import Icon from "@components/ui/icon";

import {
  getTriggerClasses, getContentClasses,
  getLabelClasses, getItemClasses
} from "@styles/inputs/selectClasses";

export const Select = forwardRef(function Select({
  name,
  onOpenChange,
  onValueChange,
  ...props
}, selectRef) {
  return (
    <SelectPrimitive.Root
      ref={selectRef}
      onOpenChange={onOpenChange}
      onValueChange={(value) => {
        onValueChange(name, value);
      }}
      {...props}
    />
  );
});

Select.displayName =
  SelectPrimitive.Root.displayName;

export const SelectTrigger = forwardRef(function SelectTrigger({
  placeholder,
  rounded,
  size = "base",
  className = "",
  ...props
}, triggerRef) {
  const triggerClasses =
    getTriggerClasses(size, rounded, className);

  return (
    <SelectPrimitive.Trigger
      ref={triggerRef}
      className={triggerClasses?.trigger}
      {...props}
    >
      <SelectPrimitive.Value
        placeholder={placeholder}
      />

      <SelectPrimitive.Icon className={triggerClasses?.iconWrapper}>
        <Icon
          name="ChevronsUpDown"
          size={size}
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});

SelectTrigger.displayName =
  SelectPrimitive.Trigger.displayName;

SelectTrigger.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string
};

export const SelectScrollUpButton =
  forwardRef(function SelectScrollUpButton({
    ...props
  }, scrollUpRef) {
    return (
      <SelectPrimitive.ScrollUpButton
        ref={scrollUpRef}
        className="py-1 text-center"
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="512" height="512"
          className="w-5 h-5 mx-auto"
        >
          <path d="M6.41,16H17.59a1,1,0,0,0,.7-1.71L12.71,8.71a1,1,0,0,0-1.42,0L5.71,14.29A1,1,0,0,0,6.41,16Z" />
        </svg>
      </SelectPrimitive.ScrollUpButton>
    );
  });

SelectScrollUpButton.displayName =
  SelectPrimitive.ScrollUpButton.displayName;

export const SelectScrollDownButton =
  forwardRef(function SelectScrollDownButton({
    ...props
  }, scrollDownRef) {
    return (
      <SelectPrimitive.ScrollDownButton
        ref={scrollDownRef}
        className="py-1 text-center"
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="512" height="512"
          className="w-5 h-5 mx-auto"
        >
          <path d="M6.41,9H17.59a1,1,0,0,1,.7,1.71l-5.58,5.58a1,1,0,0,1-1.42,0L5.71,10.71A1,1,0,0,1,6.41,9Z" />
        </svg>
      </SelectPrimitive.ScrollDownButton>
    );
  });

SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

export const SelectContent =
  forwardRef(function SelectContent({
    position = "popper",
    className = "",
    children,
    ...props
  }, contentRef) {
    const contentClasses =
      getContentClasses(position, className);

    return (
      <SelectPrimitive.Content
        ref={contentRef}
        position={position}
        className={contentClasses}
        {...props}
      >
        <SelectScrollUpButton />

        <SelectPrimitive.Viewport>
          {children}
        </SelectPrimitive.Viewport>

        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    );
  });

SelectContent.displayName =
  SelectPrimitive.Content.displayName;

SelectContent.propTypes = {
  position: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export const SelectGroup = forwardRef(function SelectGroup({
  ...props
}, groupRef) {
  return (
    <SelectPrimitive.Group
      ref={groupRef}
      className="space-y-1"
      {...props}
    />
  );
});

SelectGroup.displayName =
  SelectPrimitive.Group.displayName;

export const SelectLabel = forwardRef(function SelectLabel({
  className = "",
  ...props
}, labelRef) {
  const labelClasses = getLabelClasses(className);

  return (
    <SelectPrimitive.Label
      ref={labelRef}
      className={labelClasses}
      {...props}
    />
  );
});

SelectLabel.displayName =
  SelectPrimitive.Label.displayName;

SelectLabel.propTypes = {
  className: PropTypes.string
};

export const SelectItem = forwardRef(function SelectItem({
  textValue,
  className = "",
  children,
  ...props
}, itemRef) {
  const itemClasses = getItemClasses(className);

  return (
    <SelectPrimitive.Item
      ref={itemRef}
      className={itemClasses?.item}
      {...props}
    >
      <SelectPrimitive.ItemText>
        {children}
      </SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator
        className={itemClasses?.indicator}
      >
        <Icon
          name="Check"
          size="sm"
        />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});

SelectItem.displayName =
  SelectPrimitive.Item.displayName;

SelectItem.propTypes = {
  textValue: PropTypes.string,
  className: PropTypes.string
};

export const SelectSeparator = forwardRef(function SelectSeparator({
  ...props
}, separatorRef) {
  return (
    <SelectPrimitive.Separator
      ref={separatorRef}
      className="h-px -mx-1 my-1 bg-gray-200"
      {...props}
    />
  );
});

SelectSeparator.displayName =
  SelectPrimitive.Separator.displayName;

