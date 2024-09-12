import { usePathname } from "next/navigation";

import clsx from "clsx";

import { navigations } from "@utils/objects";

import Link from "@components/ui/link";

import { List, ListItem } from "@components/ui/list";

export default function Center() {
  const router = usePathname();

  return (
    <List
      className={clsx(
        "flex-row items-center"
      )}
    >
      {navigations?.map((navigation) => (
        <ListItem key={navigation?.id}>
          <Link
            href={`${navigation?.path}`}
            className={clsx(
              "relative inline-flex items-center",
              "h-12 py-2 px-4",
              "font-sans text-sm leading-[17px] font-medium",
              "uppercase",
              router !== navigation?.path ?
                "text-foreground" : "text-accent",
              "bg-transparent",
              "hover:text-primary",
            )}
          >
            {navigation?.name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
