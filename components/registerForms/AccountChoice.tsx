export function AccountChoiceForm(): JSX.Element {
    return (
        <div className="w-full">
            <div className="w-11/12 flex items-center justify-center">
                <div className=" w-60 h-60 border border-gray-500 hover:border-blue-800 m-2  flex flex-col items-center justify-center gap-6 rounded-lg shadow-md">
                    <h3 className="text-blue-800 font-semibold">
                        Individual Account
                    </h3>
                    <p className="text-sm font-light text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium .
                    </p>
                </div>
                <div className=" w-60 h-60 border border-gray-500 hover:border-blue-800 m-2 flex flex-col items-center justify-center gap-6 rounded-lg shadow-md">
                    <h3 className="text-blue-800 font-semibold">
                        Company Account
                    </h3>
                    <p className="text-sm font-light text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium .
                    </p>
                </div>
            </div>
        </div>
    );
}
