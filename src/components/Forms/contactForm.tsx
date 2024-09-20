import { Form, Input } from "antd";
import MainButton from "../Buttons/mainBtn";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="md:col-span-5 col-span-12">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Ismingizni kiriting!" }]}
          >
            <Input
              className="rounded-full bg-[#f4f4f4] text-base py-3 px-5"
              style={{ border: "solid 1px #e9ebeb" }}
              placeholder="Ismingiz*"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Telefon raqamingizni kiriting!" },
            ]}
          >
            <Input
              className="rounded-full bg-[#f4f4f4] text-base py-3 px-5"
              style={{ border: "solid 1px #e9ebeb" }}
              placeholder="Telefon raqamingiz*"
            />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              { required: true, message: "Telefon raqamingizni kiriting!" },
            ]}
          >
            <Input.TextArea
              className="rounded-3xl bg-[#f4f4f4] text-base py-3 px-5"
              style={{ border: "solid 1px #e9ebeb" }}
              placeholder="Xabar matni..."
              rows={6}
            />
          </Form.Item>
          <MainButton
            title="Yuborish"
            isArrow={true}
            type="main"
            className="w-full justify-center"
          />
          <p className="mt-8 text-[rgba(51,51,51,0.8)] font-normal text-base">
            Yuborish tugmachasini bosish orqali siz maxfiylik siyosatiga rozilik
            bildirasiz.
          </p>
        </Form>
      </div>
      <div className="md:col-span-1 col-span-0"></div>
      <div className="md:col-span-6 col-span-12 max-md:mt-[48px]">
        <div>
          <p className="text-secondPrimary md:text-xl text-lg font-normal">
            Telefon:
          </p>
          <a
            href="tel:+998718882288"
            className="md:text-[32px] text-[24px] font-medium leading-[1.2] my-1 hover:text-secondPrimary transition-all"
          >
            +998 71 888 22 88
          </a>
          <p className="text-[rgba(51,51,51,0.8)] font-normal text-base">
            HOZIROQ QO‘NG‘IROQ QILING!
          </p>
        </div>
        <div className="my-8">
          <p className="text-secondPrimary md:text-xl text-lg font-normal">Email:</p>
          <a
            href="mailto:info@sarbonuniversity.uz"
            className="text-base font-normal leading-[1.4] mt-1 hover:text-secondPrimary transition-all"
          >
            info@sarbonuniversity.uz
          </a>
        </div>
        <div className="my-8">
          <p className="text-secondPrimary md:text-xl text-lg font-normal">Manzil:</p>
          <a
            href="#"
            className="text-base font-normal leading-[1.4] mt-1 hover:text-secondPrimary transition-all"
          >
            Toshkent shahri, Olmazor tumani, Sag'bon ko`chasi 2B-uy
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;