import { useState } from "react";
import Attributes, { AttributeProps } from "./Attributes";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

export interface TagChildrenProps {
    type: string,
    content?: string;
    name?: string,
    attrs?: AttributeProps[],
    children?: TagChildrenProps[],
}

const SubTag = ({ child }: { child: TagChildrenProps }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="flex flex-col ml-5">

                <span className="flex flex-row">

                    <button className="mr-3" onClick={toggleOpen}>{isOpen ? <AiFillCaretDown className="w-3 h-3"/> : <AiFillCaretRight className="w-3 h-3"/>}</button>
                    
                    {`<`}
                    {child.name}
                    {child.attrs ? <Attributes attrs={child.attrs} /> : null}
                    {`>`}
                </span>

                {isOpen && child.children && child.children.map((child: TagChildrenProps) => (
                    child.type === 'text' ?
                        <p className="ml-5">{child.content}</p>
                        :
                        <SubTag child={child} />

                ))}
                <span className="ml-6">{`</`}{child.name}{`>`}</span>
            </div>
        </>
    )
}

export default SubTag;