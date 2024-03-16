import { useState } from "react";
import Attributes, { AttributeProps } from "./Attributes";
import SubTag, { TagChildrenProps } from "./SubTag";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

export interface TagProps {
    name: string;
    type: string;
    attrs: AttributeProps[];
    children: TagChildrenProps[]
}

const Tag = ({ tag }: { tag: TagProps }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={`flex ${isOpen ? 'flex-col' : 'flex-row'}`}>
            <span className="flex flex-row">
                <button className="mr-3" onClick={toggleOpen}>{isOpen ? <AiFillCaretDown className="w-3 h-3" /> : <AiFillCaretRight className="w-3 h-3" />}</button>
                {`<`}
                <span className="text-green-500">{tag.name}</span>
                <Attributes attrs={tag.attrs} />
            </span>

            {isOpen ?

                tag.children && tag.children.map((child: TagChildrenProps) => (
                    child.type === 'text' ?
                        <p className="ml-11 ">{child.content}</p>
                        :
                        <SubTag child={child} />

                ))
                :
                <span className="mx-1 rounded-lg bg-gray-100 px-2 font-bold text-sm flex justify-center">
                    ...
                </span>

            }
            <span className={isOpen ? 'ml-6' : ''}>
                {`</`}
                <span className="text-green-500">{tag.name}</span>
                {`>`}
            </span>
        </div>
    )
}

export default Tag;