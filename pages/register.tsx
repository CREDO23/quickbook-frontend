import Button from "../components/Button";
import Input from "../components/Input";
import Link from "next/link";
import { UserOutlined, MailOutlined} from "@ant-design/icons";
import { Divider } from "antd";
import google from '../public/icons/google.png'
import twitter from '../public/icons/twitter.png'
import Image from "next/image";

export default function Register(): JSX.Element {
   

    return (
        <div className=" flex items-center overflow-auto no-scrollbar  bg-[url(../public/bg-auth.jpeg)] p-4 w-screen h-screen">
            <div className=" h-full w-full absolute top-0 left-0 bg-gradient-to-r  from-blue-10 via-blue-10 to-transparent"></div>
            <div className=" h-full max-[640px]:w-full w-1/2 justify-center z-10 flex flex-col  items-center gap-4">
                <div className="flex items-center  flex-col gap-4 justify-center">
                    <h3 className=" text-white  font-bold text-3xl">
                        Welcome to <span className=" font-extrabold bg-clip-text bg-gradient-to-r from-yellow via-blue-2 to-yellow text-transparent">SPES</span>{" "}
                    </h3>
                    <p className="text-xl  text-yellow">Register</p>
                </div>

                <form className="w-80 flex flex-col items-center gap-3">
            <Input
                required
                label="Username"
                labelColor="secondary"
                placeholder="Enter your username"
                addonAfter={<UserOutlined className=" text-white" />}
                onChange={() => {
                    console.log("");
                }}
            />

            <Input
                required
                label="Email"
                addonAfter={<MailOutlined className=" text-white" />}
                labelColor="secondary"
                placeholder="Enter your email adress"
                onChange={() => {
                    console.log("");
                }}
            />
             <Input
                label="Password"
                labelColor="secondary"
                placeholder="Enter your password"
                type="password"
                onChange={() => {
                    console.log("");
                }}
            />

            <Input
                label="Confirm password"
                labelColor="secondary"
                type="password"
                placeholder="Re-enter your password"
                onChange={() => {
                    console.log("");
                }}
            />
        </form>
                   
        <div className="w-80">
                    <Button
                        type="primary"
                        block
                        title="REGISTER"
                        onClick={() => {
                            console.log("");
                        }}
                    />
                </div>
                <div className="w-80 flex items-center flex-col">
                        <Divider><p className="text-white">or</p></Divider>
                        <div className=" w-full flex items-center justify-evenly ">
                            <div className=" cursor-pointer w-12">
                            <Image className="w-full" alt="" src={google}/>
                            </div>
                            <div className=" w-12">
                            <Image className="w-full" alt="" src={twitter}/>
                            </div>
                        </div>
                </div>
                <div className="w-full flex items-center px-4 justify-center">
                    <Link
                        className=" w-full flex items-center justify-center h-full"
                        href="login"
                    >
                        <Button
                            type="link"
                            title="Login"
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
