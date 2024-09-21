"use client"

import ContactForm from "@/components/Forms/contactForm";
import Headerv1 from "@/components/Headerv1";
import TopIntroComponent from "@/components/topIntroComponent";

export default function ContactUs() {
  return (
    <div>
      <Headerv1 />
      <TopIntroComponent title="Biz bilan bog'lanish" text="Ma‘lumotlaringizni qolding, xodimlarimiz tez orada siz bilan bog‘lanishadi!" />
      <div className="container md:py-[72px] py-[64px]">
        <p className="md:text-[32px] text-2xl mb-8 font-medium">Xabar qoldirish</p>
        <ContactForm />
      </div>
      <div className="container xl:mb-[120px] md:mb-[90px] mb-[64px]">

        <iframe 
        className="w-full lg:h-[600px] md:h-[400px] h-[200px]"
        style={{ border: "0" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5989.466933257291!2d69.22311850488967!3d41.35814667615165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8de9d27423a1%3A0xfb68956d71dbc0e3!2sSarbon%20Universiteti!5e0!3m2!1sen!2s!4v1726898939130!5m2!1sen!2s" width="600" height="450"  allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}