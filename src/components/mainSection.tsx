import React from "react"
import useWindowSize from "@/hooks/useWindowSize"
import HeroButton from "./Buttons/heroBtn"
import MainButton from "./Buttons/mainBtn"
import { Fade } from "react-awesome-reveal"
import { useTranslations } from "next-intl"

const MainSection = () => {

    const {width} = useWindowSize()
    const t = useTranslations()
    
    return ( 
            <>
                <div className="pt-[28vh] text-white container mx-auto">
                    <div className="text-center">
                    <Fade delay={0} direction='up' damping={100}>
                        <p className="lg:text-[56px] md:text-[46px] text-[32px] leading-[1.1] font-[600]">SARBON UNIVERSITETI</p>
                        <p className="md:text-xl text-lg font-[400] md:mt-3 mt-2">{t("MainSection.title")}</p>
                    </Fade>
                        <div className="flex md:justify-center md:gap-3 gap-4 mg:mt-[48px] mt-[64px] max-md:flex-col">
                            <Fade delay={0} direction={width < 756 ? "up" : "left"}>
                                <MainButton title={t("global.submit-application")} type={"light"} isArrow={true} className="w-max max-md:mx-auto" />
                            </Fade>
                            <Fade delay={0} direction={width < 756 ? "up" : "right"}>
                                <HeroButton title={t("global.about-univer")} className="w-max max-md:mx-auto" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </>
    )
}
export default MainSection