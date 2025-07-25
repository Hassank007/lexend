import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/shop/Breadcumb";
import Shop2 from "@/components/shop/Shop2";
export const metadata = {
  title:
    "Shop 2 || TrackAgent.ai - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "TrackAgent.ai - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ShopPage2() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <Shop2 />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
