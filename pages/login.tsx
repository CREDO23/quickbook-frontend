import Layout from "../components/Layouts";
import TextInput from "../components/Input";
import { MailOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Login(): JSX.Element {
    return (
        <Layout title={"Login"}>
            <div className="w-full  bg-gray-500 h-full flex flex-col md:flex-row items-center justify-center md:py-8 md:px-16">
                <div className="h-full  w-full md:w-7/12 bg-white rounded-l-xl md:p-8 flex flex-col gap-8 justify-center items-center">
                    <h2 className="text-xl font-medium  text-yellow-900">
                        Sing in to{" "}
                        <span className="text-2xl font-semibold">SPES</span>
                    </h2>

                    <div className="flex flex-col items-center justify-around gap-2 w-full">
                        <div className=" w-11/12 md:w-1/2 flex flex-col gap-1">
                            <TextInput
                                onChange={(e) => {
                                    console.log(e.target.value);
                                }}
                                iconPosition="left"
                                icon={<MailOutlined />}
                                showLabel={true}
                                label="Email Adress"
                                placeholder="Enter your email adress"
                            />
                            <TextInput
                                type="password"
                                onChange={(e) => {
                                    console.log(e.target.value);
                                }}
                                label={"Password"}
                                showLabel={true}
                                placeholder="Enter your password"
                            />
                        </div>
                        <p className="text-xs my-4 font-light  text-yellow-900 cursor-pointer">
                            {" "}
                            Forgot password ?
                        </p>
                        <div className="w-11/12 md:w-1/2 flex flex-col gap-2">
                            <button className=" bg-yellow-900 border border-yellow-900 hover:bg-white hover:text-yellow-900 hover:border-custom-yellow-900 transition text-white rounded-md py-2">
                                Sing In
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:h-full hidden w-full md:flex flex-col items-center justify-center gap-4 p-6 md:w-4/12 bg-yellow-900 text-white rounded-r-xl">
                    <h2 className="text-3xl font-bold">Hello, Friend !</h2>
                    <p className="w-2/3 text-sm text-center font-light">
                        Enter your personnal details and start your journey with
                        us .
                    </p>
                    <div className="w-1/2 flex flex-col gap-2">
                        <Link className="w-full" href="/register">
                            <button className="border border-white py-1 w-full hover:text-yellow-900 hover:bg-white transition-all rounded-md ">
                                Sing Up
                            </button>
                        </Link>
                    </div>
                </div>
                <p className="text-custom-xs my-3 text-yellow-800 md:hidden font-light">
                    Don&apos;t have an account ?{" "}
                    <Link href="/register">
                        <span className=" font-semibold">Sing Up</span>
                    </Link>{" "}
                </p>
            </div>
        </Layout>
    );
}
