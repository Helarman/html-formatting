import { useState } from "react";
import Tag, { TagProps } from "./Tag";

const Renderer = () => {
    const { parse } = require('html-parse-string');
    const [code, setCode] = useState('');
    const handleCode = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setCode(e.target.value); }
    const tags = parse(code)

    return (
        <>
            <div className="flex flex-col w-full">
                <textarea
                    id="OrderNotes"
                    className="mt-16 my-2 h-56 w-full rounded-lg border-2 border-gray-100 align-top p-3 md:text-base sm:text-sm xs:text-xs"
                    placeholder="Enter HTML"
                    value={code}
                    onChange={handleCode}
                ></textarea>

                <div className="overflow-scroll border-2 border-gray-300  min-h-56 p-3  md:text-base sm:text-sm xs:text-xs">
                    <ul className="flex flex-col">
                        {tags.map((tag: TagProps) => <Tag tag={tag} />)}
                    </ul>
                </div>
            </div>

        </>
    )
};



export default Renderer;