import Layout from "../components/Layouts";
import Button from "../components/Button";

export default function Home(): JSX.Element {
    return (
        <Layout title={null}>
            <p>Home</p>
           <Button loading type="outlined" color="secondary"  title="Envoyer"  onClick={() => {console.log('first')}}/>
        </Layout>
    );
}
