import { useState } from "react";

export default function Account(): JSX.Element {
    const [account , setAccount] = useState<'personnal' | 'company'>('personnal')

    return (
        <form className=" w-80">
            <p className=" text-white pl-5">Choose an account</p>
            <div className="w-full flex flex-col items-center gap-3 p-5">
                <div onClick={() => setAccount('personnal')} className={`${account == 'personnal' ? 'border-blue-2 text-blue-2' : 'border-white text-white' } hover:border-blue-2 transition-all  rounded-lg border cursor-pointer  w-full h-20 flex items-center justify-center`}>
                    <p className=" text-2xl font-semibold ">Personnal</p>
                </div>
                <div onClick={() => setAccount('company')} className={`${account == 'company' ? 'border-blue-2 text-blue-2' : 'border-white text-white'} hover:border-blue-2  transition-all  rounded-lg border cursor-pointer w-full h-20 flex items-center justify-center`}>
                    <p className=" text-2xl font-semibold">Company</p>
                </div>
            </div>
        </form>
    );
}