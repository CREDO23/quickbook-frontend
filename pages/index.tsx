import Button from "../components/Button";
import Layout from "../components/Layouts";

export default function Home(): JSX.Element {
    return (
        <Layout title={null}>
            <p>Home</p>
            <Button
                bgcolor="yellow"
                onClick={() => console.log("")}
                title="Envoyer"
            />
        </Layout>
    );
}
