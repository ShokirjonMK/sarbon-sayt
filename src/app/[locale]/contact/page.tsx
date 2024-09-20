"use client"

import ContactForm from "@/components/Forms/contactForm";
import Header from "@/components/header";
import TopIntroComponent from "@/components/topIntroComponent";

export default function ContactUs() {
    return (
      <div>
        <Header isTransparent={false} display="sticky" />
        <TopIntroComponent title="Biz bilan bog'lanish" text="Ma‘lumotlaringizni qolding, xodimlarimiz tez orada siz bilan bog‘lanishadi!" />
        <div className="container md:py-[72px] py-[64px]">
          <p className="md:text-[32px] text-2xl mb-8 font-medium">Xabar qoldirish</p>
          <ContactForm />
        </div>
        <div className="container xl:mb-[120px] md:mb-[90px] mb-[64px]">
          <iframe 
            className="w-full lg:h-[600px] md:h-[400px] h-[200px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5037.048794855151!2d69.3303629692701!3d41.351329253172395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef53722d57267%3A0x66902b09eb5ed781!2sPERFECT%20UNIVERSITY!5e0!3m2!1sen!2s!4v1712143025060!5m2!1sen!2s" 
            style={{border: "0"}} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"

          ></iframe>
        </div>
      </div>
    )
  }