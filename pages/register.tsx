import Button from "../components/Button";
import Input from "../components/Input";
import Link from "next/link";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Alert} from "antd";
import { ChangeEvent, useState } from "react";

export default function Register(): JSX.Element {
    const [registerForm, setRegisterForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    //Handle Change

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>,
        target: string
    ): void => {
        setRegisterForm({
            ...registerForm,
            [target]: e.target.value,
        });
    };

    //Hnadle Validaton

    const handleValidation = (): Promise<string | boolean> => {

        const isFilled = Object.values(registerForm).every((input) => input);

        const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
            registerForm.email
        );

        const charLengthPassword = registerForm.password.length;

        const isMatchPassword =
            registerForm.confirmPassword == registerForm.password;

        return new Promise<string | boolean>((resolve, reject) => {
            if (!isFilled) {
                reject("Please fill all required fields");
            } else if (!isEmail) {
                reject("Invalid email address");
            } else if (!isMatchPassword) {
                reject("Password mismatch");
            } else if (charLengthPassword < 6) {
                reject("Password must be at least 6 characters");
            }else{

            resolve(true);
            }
        });
    };

    //Hnandle Submit

    const handleSubmit = async () => {

        try {
         await handleValidation();
     
            //TODO connect to API

            setAlertMessage('')
        } catch (error) {
            setAlertMessage(error as string)
        }
    };

    //Alert
    const [alertMessage , setAlertMessage] = useState<string>('')

    return (
        <div className=" flex items-center overflow-auto no-scrollbar  bg-[url(../public/bg-auth.jpeg)] p-4 w-screen h-screen">
            <div className=" h-full w-full absolute top-0 left-0 bg-gradient-to-r  from-blue-10 via-blue-10 to-transparent"></div>
            <div className=" h-full max-[850px]:w-full w-1/2 justify-center z-10 flex flex-col  items-center gap-4">
                <div className="flex items-center  flex-col gap-4 justify-center">
                    <h3 className=" text-white  font-bold text-3xl">
                        Welcome to{" "}
                        <span className=" font-extrabold bg-clip-text bg-gradient-to-r from-yellow via-blue-2 to-yellow text-transparent">
                            SPES
                        </span>{" "}
                    </h3>
                    <p className="text-xl  text-yellow">Register</p>
                </div>
                <div className='w-80'>
                    {
                        alertMessage && <Alert
                        className="w-full"
                        message={alertMessage}
                        type="error"
                        closable
                        onClose={() =>{
                             setAlertMessage('')
                        } }
                    />
                    }
                </div>
                <form  className="w-80 flex flex-col items-center gap-3">
                    <Input
                        required
                        label="Username"
                        labelColor="secondary"
                        placeholder="Enter your username"
                        addonAfter={<UserOutlined className=" text-white" />}
                        onChange={(e) => {
                            handleChange(e, "username");
                        }}
                    />

                    <Input
                        required
                        label="Email"
                        addonAfter={<MailOutlined className=" text-white" />}
                        labelColor="secondary"
                        placeholder="Enter your email adress"
                        onChange={(e) => {
                            handleChange(e, "email");
                        }}
                    />
                    <Input
                        label="Password"
                        labelColor="secondary"
                        placeholder="Enter your password"
                        type="password"
                        onChange={(e) => {
                            handleChange(e, "password");
                        }}
                    />

                    <Input
                        label="Confirm password"
                        labelColor="secondary"
                        type="password"
                        placeholder="Re-enter your password"
                        onChange={(e) => {
                            handleChange(e, "confirmPassword");
                        }}
                    />
                </form>

                <div className="w-80">
                    <Button
                        type="primary"
                        block
                        title="REGISTER"
                        onClick={() => {
                            handleSubmit()
                            console.log("");
                        }}
                    />
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
