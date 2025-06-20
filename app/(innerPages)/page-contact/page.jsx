import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks from "@/components/innerpages/ContactLinks";
import Faq from "@/components/homes/home-2/Faq";
import Brands from "@/components/common/Brands2";
import Blogs from "@/components/homes/home-2/Blogs";
export const metadata = {
  title:
    "Contact 1 || TrackAgent.ai - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "TrackAgent.ai - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Contact1 />

          <ContactLinks />
        
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
          
          </div>
          {/* <Blogs /> */}
        </div>
        <Footer2 />
      </div>
    </>
  );
}
