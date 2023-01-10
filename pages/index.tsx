import Layout from "./components/Layout";
import { DatePicker } from "antd";

export default function Home(): JSX.Element {
    return (
        <Layout title={null}>
            <DatePicker />
        </Layout>
    );
}
