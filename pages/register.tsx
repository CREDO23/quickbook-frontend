import Layout from "../components/Layouts";
import Link from "next/link";
import { OptionalInfosForm } from "../components/registerForms/OptionalInfos";

export default function Login(): JSX.Element {
    return (
        <Layout title={"Register"}>
            <div className="w-full bg-gray-500 h-full flex flex-col md:flex-row items-center justify-center md:py-8 md:px-16">
                <div className="md:h-full hidden w-full md:flex flex-col items-center justify-center gap-4 p-6 md:w-4/12 bg-blue-800 text-white rounded-l-xl">
                    <h2 className="text-3xl text-yellow-900 font-bold">
                        Welcome Back !
                    </h2>
                    <p className="w-2/3  text-center ">
                        To keep connected with us , please login with your
                        personal info .
                    </p>
                    <Link
                        className="w-full  text-sm my-5 gap-1 flex items-center justify-center"
                        href="/login"
                    >
                        <span className="text-gray-300 underline">
                            Already have an account ?
                        </span>{" "}
                        <span className="  text-yellow-900 underline ">
                            Login
                        </span>
                    </Link>
                </div>
                <div className="h-full w-full md:w-7/12 bg-white rounded-r-xl md:p-8 flex flex-col gap-8 items-center">
                    <h2 className="text-xl font-medium  text-yellow-900">
                        REGISTER
                    </h2>
                    <OptionalInfosForm />
                </div>
                <p className="text-xs my-3 text-yellow-800 md:hidden font-light">
                    <span>Alrady have an account ?</span>{" "}
                    <Link href="/login">
                        <span className=" font-semibold">Login</span>
                    </Link>{" "}
                </p>
            </div>
        </Layout>
    );
}
