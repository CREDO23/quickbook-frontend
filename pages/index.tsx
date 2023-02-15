import Layout from "../components/Layouts";

export default function Home(): JSX.Element {
    return (
        <Layout title={null}>
            <div className=" flex items-center justify-center w-full h-full">
                <h3 className=" font-bold text-4xl text-blue-2  font-">
                    QUICKBOOK
                </h3>
            </div>
        </Layout>
    );
}
