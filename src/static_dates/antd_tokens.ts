import { ThemeConfig } from "antd"

export const antdCustomTokens = ():ThemeConfig => {

    return {
        token: {
            // colorPrimary: "#007A5E",
            colorPrimary: "#2D4255",
            colorText: "#002248",
            colorTextBase: "rgba(0, 0, 0, 1)",
            colorBgBase: "#fff",
        },
        components: {
            Select: {
                optionSelectedBg: 'rgba(0, 122, 94, 0.2)'
            },
            Input: {
                activeShadow: "0 0 0 2px #2D4255"
            }
        }
    }
}