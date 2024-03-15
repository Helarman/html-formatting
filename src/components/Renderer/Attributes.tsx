export interface AttributeProps {
    name: string;
    value: string
}


const Atrtributes = ({ attrs }: { attrs: AttributeProps[] }) => {
    return (
        <>
            {attrs && attrs.map(({ name, value }) => (
                <p className="ml-1">
                    <span className="text-black">
                        {name}=
                    </span>
                    <span className="text-red-500">
                        "{value}"
                    </span>
                </p>
            ))}
        </>
    )
}

export default Atrtributes;