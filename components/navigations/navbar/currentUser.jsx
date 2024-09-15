import { getCurrentUser } from "@api/users";

import Icon from "@components/ui/icon";
import Link from "@components/ui/link";
import Button from "@components/ui/button";
import Image from "@components/ui/image";

export default function CurrentUserAvatar() {
  const userData = getCurrentUser();

  return (
    <Button
      size="sm"
      variant="text"
      iconOnly
      asChild
    >
      {userData ? (
        <Link href="/profile">
          <Image src={userData.profileImage} />
        </Link>
      ) : (
        <Link href="/profile">
          <Icon name="User" />
        </Link>
      )}
    </Button>
  )
}
