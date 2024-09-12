import clsx from "clsx";

import CustomIcon from "@components/ui/custom-icon";

import Box from "@components/layouts/box";

export default function Left() {
  return (
    <Box>
      <CustomIcon
        name="brand"
        className={clsx(
          "w-10 sm:w-12",
          "h-10 sm:h-12"
        )}
      />
    </Box>
  );
}
