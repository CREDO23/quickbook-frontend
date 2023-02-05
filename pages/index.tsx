import Button from "../components/Button";
import Layout from "../components/Layouts";
import {Button as Btn} from 'antd'

export default function Home(): JSX.Element {
    return (
        <Layout title={null}>
            <p>Home</p>
            <Button onClick={() => console.log('')} type='dashed' shape='round' danger title="Envoyer" />
        </Layout>
    );
}
