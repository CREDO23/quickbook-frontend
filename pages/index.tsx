import Input from "../components/Input";
import Button from "../components/Button";
import Layout from "../components/Layouts";
import { FrownOutlined } from "@ant-design/icons";

export default function Home(): JSX.Element {
    return (
        <Layout title={null}>
            <p>Home</p>
            <div className="w-80 mx-80">
                <Button
                    onClick={() => console.log("")}
                    type="primary"
                    block
                    title="Envoyer"
                />
            </div>
        </Layout>
    );
}
