export default function Account () : JSX.Element {
    return <form className=" w-80" >
        <p className=" text-white pl-5">Choose an account</p>
        <div className="w-full flex flex-col items-center gap-3 p-5">
                <div className=" hover:border-blue-2 text-white transition-all hover:text-blue-2 rounded-lg border cursor-pointer border-white w-full h-20 flex items-center justify-center">
                   <p className=" text-2xl font-semibold ">Personnal</p>  
                </div>
                <div className="border  hover:border-blue-2 text-white transition-all hover:text-blue-2 cursor-pointer rounded-lg border-white w-full h-20 flex items-center justify-center">
                   <p className=" text-2xl font-semibold">Company</p>  
                </div>
        </div>
    </form>
}