import Layout from "../components/Layouts";
import TextInput from "../components/Input";
import Button from "../components/Button";
import { MailOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Login(): JSX.Element {
    return (
        <Layout title={"Login"}>
            <div className="w-full  bg-gray-500 h-full flex flex-col md:flex-row items-center justify-center md:py-8 md:px-16">
                <div className="h-full  w-full md:w-7/12 bg-white rounded-l-xl md:p-8 flex flex-col gap-8 justify-center items-center">
                    <h2 className="text-xl font-medium  text-yellow-900">
                        LOGIN to{" "}
                        <span className="text-2xl font-semibold">SPES</span>
                    </h2>

                    <div className="flex flex-col text-blue-900 items-center justify-around gap-2 w-full">
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
                        <p className="text-xs my-4  text-yellow-900 cursor-pointer">
                            {" "}
                            Forgot password ?
                        </p>
                        <div className="w-11/12 md:w-1/2 flex flex-col gap-2">
                            <Button
                                onClick={() => console.log("first")}
                                title="LOGIN"
                                fullWidth
                            />
                        </div>
                    </div>
                </div>
                <div className="md:h-full hidden w-full md:flex flex-col items-center justify-center text-white gap-4 p-6 md:w-4/12 bg-blue-800 rounded-r-xl">
                    <h2 className="text-3xl  text-yellow-900 font-bold">
                        Hello, Friend !
                    </h2>
                    <p className="w-2/3  text-center ">
                        Enter your personnal details and start your journey with
                        us .
                    </p>
                    <div className="w-1/2 flex flex-col gap-2">
                        <Link
                            className="w-full  text-sm my-5 gap-1 flex items-center justify-center"
                            href="/register"
                        >
                            <span className="text-gray-300 underline">
                                Don&apos;t have an account ?
                            </span>{" "}
                            <span className="  text-yellow-900 underline ">
                                Register
                            </span>
                        </Link>
                    </div>
                </div>
                <p className="text-custom-xs my-3 text-yellow-800 md:hidden font-light">
                    Don&apos;t have an account ?{" "}
                    <Link href="/register">
                        <span className=" font-semibold">Register</span>
                    </Link>{" "}
                </p>
            </div>
        </Layout>
    );
}
