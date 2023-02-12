
import Input from "../components/Input";
import { MailOutlined } from "@ant-design/icons";
import Button from "../components/Button";
import { Steps } from "antd";
import Account from "../components/registerForms/Account";

export default function  Register(): JSX.Element {
    return (
        <div className=" flex items-center  bg-blue-10 justify-center p-4 w-screen h-screen">
            <div className=" flex flex-col  items-center gap-6">
                <div className="flex items-center flex-col gap-4 justify-center">
                    <h3 className=" text-white font-semibold text-3xl">Welcome to <span className=" font-extrabold">SPES</span> </h3>
                    <p className="text-2xl font-light text-white">Register</p>
                </div>
                
               <div>
                <Steps type="inline" size="small"  progressDot
      current={0}
      items={[
        {
          description : 'Step1'
        },
        {
            description: 'Step 2',
        },
        {
            description: 'Step 3',
        },
        {
            description: 'Step 4',
          },
      ]}/>
               </div>
              
             <Account/>
               <div className=" w-full flex items-center justify-between px-4">
               <Button
                    type="primary"
                    title="Prev"
                    onClick={() => {
                        console.log("");
                    }}
                />
                 <Button
                    type="primary"
                    title="Next"
                    onClick={() => {
                        console.log("");
                    }}
                />
               </div>
               
                <div className="w-full flex items-center px-4 justify-center">
                    <Button
                        type="link"
                        block
                        title="Login"
                        onClick={() => {
                            console.log("");
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
