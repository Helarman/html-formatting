export interface AttributeProps {
    name: string;
    value: string
}


interface AttributesProps {
    attrs: AttributeProps[],
    voidElement?: boolean,
}

const Atrtributes: React.FC<AttributesProps> = ({ attrs, voidElement }) => {
    return (
        <div className="flex flex-row">
            <p>
                {attrs && attrs.map(({ name, value }) => (
                    <span className="ml-1">
                        <span className="text-black">
                            {name}=
                        </span>
                        <span className="text-red-500">
                            "{value}"
                        </span>
                    </span>
                ))}
                {!voidElement ? '>' : '/>'}
            </p>
        </div>
    )
}

export default Atrtributes;