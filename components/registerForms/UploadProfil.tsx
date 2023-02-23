import React, { useState } from "react";
import Image from "next/image";

export default function UploadProfil(): JSX.Element {
    const [url, setUrl] = useState("");

    return (
        <div className=" w-80 flex flex-col gap-4 p-4  items-center justify-center">
            <div className=" w-full">
                <p className=" text-white">Upload your profil</p>
            </div>

            <div className=" border border-gray-400 flex items-center justify-center rounded-full p-2 w-40 h-40">
                {url ? (
                    <Image
                        width={150}
                        height={150}
                        className=" w-full h-full"
                        alt="user"
                        src={url}
                    />
                ) : (
                    <p className=" text-gray-500">No data</p>
                )}
            </div>
            {!url && (
                <div className="w-24 rounded border-dashed cursor-pointer border overflow-hidden">
                    <input
                        onChange={() => {
                            setUrl("");
                        }}
                        type="file"
                        className=" file:bg-transparent file:border-none file:text-white"
                    />
                </div>
            )}
        </div>
    );
}
