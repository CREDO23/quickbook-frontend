import Input from "../Input";

export default function Password () :JSX.Element {
    return <form className="w-80 flex flex-col items-center gap-3">
    <Input
        size="large"
        label="Password"
        labelColor="secondary"
        placeholder="Enter your password"
        type="password"
        onChange={() => {
            console.log("");
        }}
    />

    <Input
        size="large"
        label="Confirm password"
        labelColor="secondary"
        type="password"
        placeholder="Re-enter your password"
        onChange={() => {
            console.log("");
        }}
    />
</form>
}