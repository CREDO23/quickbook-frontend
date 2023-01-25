import TextInput from "../Input";

export default function ConfirmPasswordForm(): JSX.Element {
    return (
        <div className="flex  text-blue-900 flex-col items-center justify-around gap-2 w-full">
            <div className=" w-11/12 md:w-1/2 flex flex-col gap-1">
                <TextInput
                    type="password"
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    iconPosition="left"
                    showLabel={true}
                    label="Password"
                    placeholder="Enter your password"
                />
                <TextInput
                    type="password"
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    iconPosition="left"
                    showLabel={true}
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                />
            </div>
        </div>
    );
}
