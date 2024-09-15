import Main from "@components/layouts/main";

import UserInfoSection from "./_sections/userinfo-section";
import WishlistSection from "./_sections/wishlist-section";

export default function Account() {
  return (
    <>
      <Main>
        <UserInfoSection />

        <WishlistSection />
      </Main>
    </>
  );
}
