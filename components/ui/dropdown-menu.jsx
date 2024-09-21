"use client";

import { forwardRef } from "react";

import clsx from "clsx";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import Icon from "@components/ui/icon";

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = forwardRef(function DropdownMenuContent(
  { className = "", children, ...props },
  ref
) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        className={clsx(
          "z-50 relative",
          "min-w-[8rem]",
          "p-4",
          // "overflow-hidden",
          "text-foreground",
          "bg-background",
          "border",
          "shadow-lg",
          "data-[align=start]:origin-top-left",
          "data-[align=end]:origin-top-right",
          "data-[state=open]:animate-in",
          "data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-90",
          "data-[state=closed]:fade-out-0",
          "data-[state=open]:zoom-in-90",
          "data-[state=closed]:zoom-out-100",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          "data-[state=open]:duration-300",
          "group",
          className
        )}
        {...props}
      >
        {children}

        <span
          className={clsx(
            "z-50 absolute",
            "group-data-[side=bottom]:-top-[7px]",
            "group-data-[side=left]:top-4",
            "group-data-[side=left]:-right-[7px]",
            "group-data-[align=end]:right-4",
            "group-data-[state=open]:animate-in",
            "group-data-[state=closed]:animate-out",
            "group-data-[side=bottom]:slide-in-from-bottom-2",
            "group-data-[side=left]:slide-in-from-left-2",
            "group-data-[side=right]:slide-in-from-right-2",
            "group-data-[side=top]:slide-in-from-top-2",
            "group-data-[state=open]:duration-150"
          )}
        >
          <span
            className={clsx(
              "group-data-[side=bottom]:-rotate-45",
              "group-data-[side=left]:rotate-45",
              "block",
              "h-3 w-3",
              "bg-background",
              "border border-inherit",
              "border-b-0 border-l-0"
            )}
          />
        </span>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
});

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuLabel = forwardRef(function DropdownMenuLabel(
  { inset = false, className = "", ...props },
  ref
) {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={clsx(
        "px-2 py-1.5",
        inset && "pl-8",
        "text-sm font-semibold",
        className
      )}
      {...props}
    />
  );
});

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

export const DropdownMenuItem = forwardRef(function DropdownMenuItem(
  { inset = false, className = "", ...props },
  ref
) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={clsx(
        "relative flex items-center",
        "px-0 py-1.5",
        inset && "pl-8",
        "cursor-pointer select-none",
        "text-sm font-semibold",
        "outline-none",
        "text-foreground",
        "bg-transparent",
        "transition-colors",
        "focus:text-accent-foreground",
        "focus:bg-accent",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:cursor-not-allowed",
        "data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  );
});

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export const DropdownMenuCheckboxItem = forwardRef(
  function DropdownMenuCheckboxItem(
    { inset = false, checked, className = "", children, ...props },
    ref
  ) {
    return (
      <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className={clsx(
          "relative flex items-center",
          "px-0 py-1.5",
          inset && "pl-8",
          "cursor-pointer select-none",
          "text-sm font-normal",
          "outline-none",
          "text-muted-foreground",
          "bg-transparent",
          "transition-colors",
          "focus:text-accent",
          "data-[disabled]:pointer-events-none",
          "data-[disabled]:cursor-not-allowed",
          "data-[disabled]:opacity-50",
          className
        )}
        checked={checked}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <Icon name="Circle" />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>

        {children}
      </DropdownMenuPrimitive.CheckboxItem>
    );
  }
);

DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuRadioItem = forwardRef(function DropdownMenuRadioItem(
  { className = "", children, ...props },
  ref
) {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={clsx(
        "relative flex items-center",
        "px-0 py-1.5",
        inset && "pl-8",
        "cursor-pointer select-none",
        "text-sm font-medium",
        "outline-none",
        "text-foreground",
        "bg-transparent",
        "transition-colors",
        "focus:text-accent",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:cursor-not-allowed",
        "data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Icon name="Circle" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

export const DropdownMenuSeparator = forwardRef(function DropdownMenuSeparator(
  { className = "", ...props },
  ref
) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={clsx(" h-px", "-mx-1 my-1", "bg-muted", className)}
      {...props}
    />
  );
});

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export function DropdownMenuShortcut({ className = "", ...props }) {
  return (
    <span
      className={clsx(
        "ml-auto",
        "text-xs tracking-widest",
        "opacity-60",
        className
      )}
      {...props}
    />
  );
}

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export const DropdownMenuSubTrigger = forwardRef(
  function DropdownMenuSubTrigger(
    { inset = false, className = "", children, ...props },
    ref
  ) {
    return (
      <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={clsx(
          "flex items-center",
          "px-2 py-1.5",
          inset && "pl-8",
          "text-sm",
          "cursor-pointer select-none",
          "outline-none",
          "focus:text-accent",
          "focus:bg-accent",
          "data-[state=open]:bg-accent",
          className
        )}
        {...props}
      >
        {children}

        <Icon name="ChevronRight" className="ml-auto" />
      </DropdownMenuPrimitive.SubTrigger>
    );
  }
);

DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

export const DropdownMenuSubContent = forwardRef(
  function DropdownMenuSubContent({ className = "", ...props }, ref) {
    return (
      <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={clsx(
          "z-50",
          "min-w-[8rem]",
          "p-4",
          "overflow-hidden",
          "text-foreground",
          "bg-background",
          "border",
          "data-[state=open]:animate-in",
          "data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0",
          "data-[state=closed]:fade-out-0",
          "data-[state=open]:zoom-in-95",
          "data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    );
  }
);

DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;
