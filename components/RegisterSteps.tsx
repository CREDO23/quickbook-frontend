import { Steps, ConfigProvider } from "antd";

interface Props {
    steps: { title: string; description: string; form: JSX.Element }[];
}

export default function RegisterStep({steps} : Props): JSX.Element {
    

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
        description: item.description,
    }));
    return (
        <ConfigProvider
            theme={{
                components: {
                    Steps: {
                        colorText: "rgb(7,26,64)",
                        colorPrimary: "rgb(191,191,191)",
                    },
                },
            }}
        >
            <div className="w-full">
                <Steps
                    size="small"
                    className=" text-yellow-900"
                    current={4}
                    items={items}
                />
            </div>
        </ConfigProvider>
    );
}
