import Layout from "../components/Layouts";
import TextInput from "../components/Inputs/TextInput";
import PasswordInput from "../components/Inputs/PasswordInput";
import Button from "../components/Buttons/Button";
import { Divider } from "antd";
import Facebook from "../public/icons/facebook.svg";
import Google from "../public/icons/google.svg";
import Twitter from "../public/icons/twitter.svg";
import { MailOutlined } from "@ant-design/icons";


export default function Login(): JSX.Element {
    return (
        <Layout title={"Login"}>
            <div className="w-full bg-custom-gray-50 h-full flex items-center justify-center py-8 px-16">
                <div className="h-full w-7/12 bg-white rounded-l-xl p-8 flex flex-col gap-4 justify-center items-center">
                    <h2 className="text-2xl font-light  text-custom-yellow-900">
                        Sing in to <span className=" font-semibold">SPES</span>
                    </h2>

                    <div className="flex flex-col items-center justify-around gap-2 w-full">
                    <div className="w-full font-light flex items-center justify-center gap-6 my-4">
                        <span className="h-8 cursor-pointer shadow bg-transparent rounded-full w-8">
                            <Facebook />
                        </span>

                        <span className="h-8 cursor-pointer shadow bg-transparent rounded-full w-8">
                            <Google />
                        </span>
                        <span className="h-8 cursor-pointer shadow bg-transparent rounded-full w-8">
                            <Twitter />
                        </span>
                    </div>

                    <div className="w-7/12">
                        <Divider>
                            <p className=" text-sm text-custom-gray-100 font-light">
                                or use your credentials
                            </p>
                        </Divider>
                    </div>

                    <div className="w-1/2 flex flex-col gap-1">
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
                    </div>
                        <p className="text-custom-xs dec font-light  text-custom-yellow-900 cursor-pointer"> Forgot password ?</p>
                    <div className="w-1/2 flex flex-col gap-2">
                        <Button
                            style={{ background: "#F9A21D", color: "white" , borderRadius : '2rem' , fontSize : '1rem'}}
                            onClick={(e) => console.log(e)}
                            name="Sing in"
                        />
                    </div>
                    </div>
                </div>
                <div className="h-full  flex flex-col items-center justify-center gap-4 p-6 w-4/12 bg-custom-yellow-900 text-white rounded-r-xl">
                    <h2 className="text-custom-3xl font-bold">Hello, Friend !</h2>
                    <p className="w-2/3 text-sm text-center font-light">Enter your personnal details and start your journey with us .</p>
                    <div className="w-1/2 flex flex-col gap-2">
                         <Button
                         type="outlined"
                            style={{ color: "white" , border : 'solid 1px #FCD89F' , borderRadius : '2rem' , fontSize : '1rem' }}
                            onClick={(e) => console.log(e)}
                            name="Sing up"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
