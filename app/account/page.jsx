import { Suspense } from "react";

import { Skeleton } from "@components/ui/skeleton";

import Main from "@components/layouts/main";

import UserInfoSection from "./_sections/userinfo-section";
import WishlistSection from "./_sections/wishlist-section";

export default function Account() {
  return (
    <>
      <Main>
        <Suspense fallback={<Skeleton className="w-40 h-60 bg-gray-300" />}>
          <UserInfoSection />
        </Suspense>

        <WishlistSection />
      </Main>
    </>
  );
}
