import { MutableRefObject, useEffect, useRef } from "react";

export default function ConfirmEmail(): JSX.Element {

    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);
    const input4 = useRef<HTMLInputElement>(null);

    let currenntindex = 0;

    useEffect(() => {
      inputs[currenntindex].current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const inputs = [input1, input2, input3 , input4];

    const handleChange = (inputs : MutableRefObject<HTMLInputElement | null>[]) => {

            if(inputs[currenntindex]?.current?.value.length == 1){

                currenntindex ++

                inputs[currenntindex]?.current?.focus()

            }
      
    }

    const handleNavigate = (e : React.KeyboardEvent<HTMLInputElement>  ,inputs : MutableRefObject<HTMLInputElement | null>[]) => {
      if(e.key == "ArrowLeft"){
            currenntindex --
            inputs[currenntindex]?.current?.focus()
      }else if(e.key == "ArrowRight"){
            currenntindex ++
            inputs[currenntindex]?.current?.focus()
      }else{

      }
    }

    return (
        <form className="w-80 flex justify-center items-center gap-3">
            <input
                ref={input1}
                onChange={() => handleChange(inputs)}
                onKeyDown={(e) => handleNavigate(e , inputs)}
                className=" focus:border-2 focus:border-blue-2 p-3 text-lg font-semibold flex items-center justify-center focus:outline-none rounded w-10 h-10"
                type="text"
                name=""
                id=""
            />
            <input
                ref={input2}
                onChange={() => handleChange(inputs)}
                onKeyDown={(e) => handleNavigate(e , inputs)}
                className=" focus:border-2 focus:border-blue-2 p-3 text-lg font-semibold flex items-center justify-center focus:outline-none rounded w-10 h-10"
                type="text"
                name=""
                id=""
            />
            <input
                ref={input3}
                onChange={() => handleChange(inputs)}
                onKeyDown={(e) => handleNavigate(e , inputs)}
                className=" focus:border-2 focus:border-blue-2 p-3 text-lg font-semibold flex items-center justify-center focus:outline-none rounded w-10 h-10"
                type="text"
                name=""
                id=""
            />
            <input
                ref={input4}
                onChange={() => handleChange(inputs)}
                onKeyDown={(e) => handleNavigate(e , inputs)}
                className=" focus:border-2 focus:border-blue-2 p-3 text-lg font-semibold flex items-center justify-center focus:outline-none rounded w-10 h-10"
                type="text"
                name=""
                id=""
            />
        </form>
    );
}
