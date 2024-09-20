import Footer from "@/components/footer";
import HeaderTop from "@/components/header-top";
import { GlobalContextProvider } from "@/contexts/store";
import { antdCustomTokens } from "@/static_dates/antd_tokens";
import { ConfigProvider } from "antd";
import { NextIntlClientProvider, useMessages } from "next-intl";
import 'swiper/css';

export default function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
 
    const messages = useMessages();

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
          <HeaderTop />
          <GlobalContextProvider>
            <ConfigProvider theme={antdCustomTokens()} >
              {children}
            </ConfigProvider>
          </GlobalContextProvider>
          <Footer />
        </NextIntlClientProvider>
    );
  }
  
  