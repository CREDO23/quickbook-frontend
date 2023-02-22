import Button from "../components/Button";
import { Steps } from "antd";
import Account from "../components/registerForms/Account";
import Link from "next/link";
import Password from "../components/registerForms/Password";
import RequiredInfo from "../components/registerForms/RequiredInfo";
import OptionalInfo from "../components/registerForms/OptionalInfo";
import UploadProfil from "../components/registerForms/UploadProfil";
import { useState } from "react";
import ConfirmEmail from "../components/registerForms/ConfirmEmail";

export default function Register(): JSX.Element {
    const registerForms = [
        {
            form: <Account />,
        },
        {
            form: <RequiredInfo />,
        },
        {
            form: <OptionalInfo />,
        },
        {
            form: <UploadProfil />,
        },
        {
            form: <Password />,
        },
        {
            form: <ConfirmEmail />,
        },
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className=" flex items-center overflow-auto no-scrollbar  bg-blue-10 justify-center p-4 w-screen h-screen">
            <div className=" flex flex-col  items-center gap-2">
                <div className="flex items-center flex-col gap-4 justify-center">
                    <h3 className=" text-white font-semibold text-3xl">
                        Welcome to <span className=" font-extrabold">SPES</span>{" "}
                    </h3>
                    <p className="text-xl font-light text-white">Register</p>
                </div>

                <div>
                    <Steps
                        type="inline"
                        size="small"
                        progressDot
                        current={currentStep}
                        items={[
                            {
                                description: "Step1",
                            },
                            {
                                description: "Step 2",
                            },
                            {
                                description: "Step 3",
                            },
                            {
                                description: "Step 4",
                            },
                            {
                                description: "Step 5",
                            },
                        ]}
                    />
                </div>
                {registerForms[currentStep]?.form}
                <div className={` w-full flex items-center ${currentStep <= 3 ? ' justify-between' : ' justify-center'}`}>
                    {currentStep <= 3 ? (
                        <>
                            <Button
                                type="primary"
                                title="Prev"
                                onClick={() => {
                                    if (currentStep > 0) {
                                        handlePrev();
                                    }
                                }}
                            />
                            <Button
                                type="primary"
                                title="Next"
                                onClick={() => {
                                    if (
                                        currentStep <
                                        registerForms.length - 1
                                    ) {
                                        handleNext();
                                    }
                                }}
                            />
                        </>
                    ) : currentStep == 5 ? (
                        <div className=" my-3">
                            <Button
                                type="primary"
                                title="Send"
                                
                                onClick={() => {
                                    if (
                                        currentStep <
                                        registerForms.length - 1
                                    ) {
                                        handleNext();
                                    }
                                }}
                            />
                        </div>
                    ) : (
                        <>
                            <Button
                                type="primary"
                                title="REGISTER"
                                block
                                onClick={() => {
                                    if (
                                        currentStep <
                                        registerForms.length - 1
                                    ) {
                                        handleNext();
                                    }
                                }}
                            />
                        </>
                    )}
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
