import Layout from "../components/Layouts";
import TextInput from "../components/Inputs/TextInput";
import PasswordInput from "../components/Inputs/PasswordInput";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Login(): JSX.Element {
    return (
        <Layout title={"Register"}>
            <div className="w-full bg-custom-gray-50 h-full flex flex-col md:flex-row items-center justify-center md:py-8 md:px-16">
                <div className="md:h-full hidden w-full md:flex flex-col items-center justify-center gap-4 p-6 md:w-4/12 bg-custom-yellow-900 text-white rounded-l-xl">
                    <h2 className="text-custom-3xl font-bold">
                        Welcome Back !
                    </h2>
                    <p className="w-2/3 text-sm text-center font-light">
                        To keep connected with us , please login with your
                        personal info .
                    </p>
                    <div className="w-1/2 flex flex-col gap-2">
                        <Link className="w-full" href="/login">
                            <button className="border w-full border-white py-1 hover:text-custom-yellow-900 hover:bg-white transition-all rounded-md ">
                                Sing In
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="h-full w-full md:w-7/12 bg-white rounded-r-xl md:p-8 flex flex-col gap-8 justify-center items-center">
                    <h2 className="text-xl font-medium  text-custom-yellow-900">
                        Create An Account
                    </h2>

                    <div className="flex flex-col items-center justify-around gap-2 w-full">
                        <div className=" w-11/12 md:w-1/2 flex flex-col gap-1">
                            <TextInput
                                onChange={(e) => {
                                    console.log(e.target.value);
                                }}
                                iconPosition="left"
                                icon={<UserOutlined />}
                                showLabel={true}
                                label="User Name"
                                placeholder="Enter your username"
                            />
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
                            <PasswordInput
                                onChange={(e) => {
                                    console.log(e.target.value);
                                }}
                                label={"Password"}
                                showLabel={true}
                                placeholder="Enter your password"
                            />
                            <PasswordInput
                                onChange={(e) => {
                                    console.log(e.target.value);
                                }}
                                label={"Confirm Password"}
                                showLabel={true}
                                placeholder="Confirm your password"
                            />
                        </div>
                        <div className="w-11/12 md:w-1/2 flex flex-col gap-2">
                            <button className=" bg-custom-yellow-900 border border-custom-yellow-900 hover:bg-white hover:text-custom-yellow-900 hover:border-custom-yellow-900 transition text-white rounded-md py-2">
                                Sing up
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-custom-xs my-3 text-custom-yellow-800 md:hidden font-light">Alrady have an account ? <Link href='/login'><span className=" font-semibold">Sing In</span></Link> </p>
            </div>
        </Layout>
    );
}
