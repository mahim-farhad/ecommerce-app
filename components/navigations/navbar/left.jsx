import clsx from "clsx";

import Typography from "@components/ui/typography";
import Link from "@components/ui/link";
import CustomIcon from "@components/ui/custom-icon";

export default function Left() {
  return (
    <Link
      href="/"
      className={clsx(
        "flex gap-4 items-center"
      )}
    >
      <CustomIcon
        name="brand3"
        className={clsx(
          "w-10 h-10"
        )}
      />

      <Typography
        type="h4"
        className={clsx(
          "font-block !leading-[31px]",
          "uppercase",
          "tracking-[-0.022em]"
        )}
      >
        Raphix.
      </Typography>
    </Link>
  );
}
