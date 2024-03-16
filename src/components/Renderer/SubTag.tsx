import { useState } from "react";
import Attributes, { AttributeProps } from "./Attributes";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

export interface TagChildrenProps {
    type: string,
    content?: string;
    name?: string,
    attrs?: AttributeProps[],
    voidElement?: boolean,
    children?: TagChildrenProps[],
}

const SubTag = ({ child }: { child: TagChildrenProps }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className={`flex ml-5 ${isOpen ? 'flex-col' : 'flex-row'}`}>
                <span className={`${child.voidElement ? 'ml-6' : ''} " flex flex-row"`}>

                    {!child.voidElement ?
                        <button className="mr-3" onClick={toggleOpen}>
                            {isOpen ? <AiFillCaretDown className="w-3 h-3" /> : <AiFillCaretRight className="w-3 h-3" />}
                        </button>
                        : null
                    }

                    {`<`}

                    <span className="text-green-500" >{child.name}</span>

                    {child.attrs ? <Attributes attrs={child.attrs} voidElement={child.voidElement}/> : child.voidElement ? `>` : '/>'}

                </span>

                {!child.voidElement ?
                    <>
                        {isOpen ?

                            child.children && child.children.map((child: TagChildrenProps) => (
                                child.type === 'text' ?
                                    <p className="ml-11">{child.content}</p>
                                    :
                                    <SubTag child={child} />

                            ))

                            :

                            (
                                <span className="rounded-lg bg-gray-100 px-2 font-bold text-sm flex justify-center">
                                    ...
                                </span>
                            )
                        }

                        <p className={isOpen ? 'ml-6' : ''}>
                            {`</`}
                            <span className="text-green-500">{child.name}</span>
                            {`>`}
                        </p>
                    </>

                    :

                    null
                }
            </div >
        </>
    )
}

export default SubTag;
