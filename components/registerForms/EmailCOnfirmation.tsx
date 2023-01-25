import TextInput from "../Input";
import Button from "../Button";

export default function EmailConfirmation(): JSX.Element {
    return (
        <div className="flex  text-blue-900 flex-col items-center justify-around gap-2 w-full">
            <div className=" w-11/12 md:w-1/2 flex flex-col gap-1">
                <div className="w-full flex flex-col gap-4">
                    <p className="">
                        We have sent 6 digits code in your email box , Please
                        paste it here to confirm your email adress !
                    </p>
                    <TextInput
                        onChange={(e) => {
                            console.log(e.target.value);
                        }}
                        iconPosition="left"
                        showLabel={true}
                        placeholder="Enter the digits code here..."
                    />
                    <div className="w-full flex items-center justify-center">
                        <Button
                            onClick={() => console.log("")}
                            title="Submit"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
