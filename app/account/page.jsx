import Main from "@components/layouts/main";

import WishlistSection from "./_sections/wishlist-section";
import CartSection from "./_sections/card-section";
import UserInfoSection from "./_sections/userinfo-section";

export default function Account() {
  return (
    <>
      <Main>
        <WishlistSection />

        <CartSection />

        <UserInfoSection />
      </Main>
    </>
  );
}
