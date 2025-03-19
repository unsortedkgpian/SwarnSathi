import ContactBanner from '@/components/ContactBanner'
import ContactMapSection from '@/components/contact-swarn-sathi/ContactMapSection';
import InnerBanner from '@/components/contact-swarn-sathi/InnerBanner'
import NeedHelpSection from '@/components/contact-swarn-sathi/NeedHelpSection';
import React from 'react'

const page = () => {
  return (
      <>
          {/* <ContactBanner/> */}
          <InnerBanner pageTitle="Contact Us" variant="contact" />
          <ContactMapSection
              title="Get in touch with us."
              description="Fill up the form and our team will get back to you within 24 hours"
              variant="contact"
          />
          <NeedHelpSection
              subTitle="You can reach out to us for all your"
              title="Need more help?"
              description="Queries, complaints and feedback. We will be happy to serve you"
              contactMethods={[
                  {
                      iconSrc: "/images/icon/need-help-1.png",
                      iconAlt: "phone icon",
                      title: "Contact",
                      content: "7044494994#033-4804-0009",
                      hasBr: true,
                  },
                  {
                      iconSrc: "/images/icon/need-help-2.png",
                      iconAlt: "email icon",
                      title: "Help & Support",
                      content: "query@swarnsathi.com",
                      hasBr: true,
                  },
                  {
                      iconSrc: "/images/icon/need-help-3.png",
                      iconAlt: "address icon",
                      title: "Address",
                      content:
                          "2nd floor, 29/5E, Dr Ambedkar Sarani, Topsia More, Kolkata, West Bengal 700046",
                  },
              ]}
          />
      </>
  );
}

export default page