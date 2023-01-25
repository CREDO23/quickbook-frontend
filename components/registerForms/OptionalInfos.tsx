import { UserOutlined } from "@ant-design/icons";
import TextInput from "../Input";
import SelectInput from "../SelectInput";

export function OptionalInfosForm(): JSX.Element {
    return (
        <div className="flex  text-blue-900 flex-col items-center justify-around gap-2 w-full">
            <div className=" w-11/12 md:w-1/2 flex flex-col gap-1">
                <TextInput
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    iconPosition="right"
                    icon={<UserOutlined />}
                    showLabel={true}
                    label="First Name"
                    placeholder="Enter your first name"
                />
                <TextInput
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    iconPosition="right"
                    icon={<UserOutlined />}
                    showLabel={true}
                    label="Last Name"
                    placeholder="Enter your last name"
                />
                <SelectInput
                    label="Gender"
                    placeholder="Select your gender"
                    onChange={(e) => {
                        console.log(e.target);
                    }}
                    options={["Male", "Female"]}
                />
                <TextInput
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    label={"Profession"}
                    showLabel={true}
                    placeholder="Enter your profession"
                />
                <TextInput
                    type="textarea"
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    label={"Description"}
                    showLabel={true}
                    placeholder="Your description"
                />
                 <SelectInput
                    label="Your country"
                    placeholder="Select your country"
                    onChange={(e) => {
                        console.log(e.target);
                    }}
                    options={["Male", "Female"]}
                />
                 <SelectInput
                    label="Your City"
                    placeholder="Select your city"
                    onChange={(e) => {
                        console.log(e.target);
                    }}
                    options={["Male", "Female"]}
                />
            </div>
        </div>
    );
}
