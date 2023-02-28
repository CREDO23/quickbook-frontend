import logo from "../public/icons/logo.png";
import Image from "next/image";
import Input from "../components/Input";
import { MailOutlined } from "@ant-design/icons";
import Button from "../components/Button";
import Link from "next/link";

export default function Login(): JSX.Element {
    return (
        <div className=" flex items-center  relative bg-[url(../public/bg-auth.jpeg)] p-4 w-screen h-screen">
            <div className=" h-full w-full absolute top-0 left-0 bg-gradient-to-r  from-blue-10 via-blue-10 to-transparent"></div>
        
            <div className="w-1/2 max-[640px]:w-full h-full justify-center z-10 flex flex-col  items-center gap-4">
                <div className="flex items-center justify-center h-40 w-40">
                    <Image className="w-full h-full" alt="logo" src={logo} />
                </div>
                <p className="text-xl font-semibold text-yellow">Sing In</p>
                <form className="w-80 flex flex-col items-center gap-3">
                    <Input
                        label="Email"
                        labelColor="secondary"
                        placeholder="Enter your email"
                        addonAfter={<MailOutlined className=" text-white" />}
                        onChange={() => {
                            console.log("");
                        }}
                    />

                    <Input
                        label="Password"
                        labelColor="secondary"
                        type="password"
                        placeholder="Enter your password"
                        onChange={() => {
                            console.log("");
                        }}
                    />
                </form>
                <div className="w-80">
                    <Button
                        type="primary"
                        block
                        title="LOGIN"
                        onClick={() => {
                            console.log("");
                        }}
                    />
                </div>

                <div className=" flex items-center gap-2 px-4 justify-between">
                    <Button
                        type="link"
                        block
                        title="Password"
                        onClick={() => {
                            console.log("");
                        }}
                    />{" "}
                    <span className=" border inline-block h-6 border-blue-2 w-[1px]"></span>{" "}
                    <Link className=" w-full h-full" href="register">
                        <Button
                            type="link"
                            block
                            title="Register"
                            onClick={() => {
                                console.log("");
                            }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
