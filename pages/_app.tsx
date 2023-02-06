import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#2973F2",
                    colorError : "#FE4D4F"
                },
            }}
        >
            <Component {...pageProps} />
        </ConfigProvider>
    );
}
