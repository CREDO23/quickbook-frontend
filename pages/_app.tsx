import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {ConfigProvider} from 'antd'

export default function App({ Component, pageProps }: AppProps) {

         return  <ConfigProvider theme={{
            token : {
                colorPrimary : '#212886',
            }
        }}>
            <Component {...pageProps} />
        </ConfigProvider> 
}
