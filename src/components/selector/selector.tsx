import Image from "next/image";

export interface ButtonProps {
    title: string;
}
export default function Selector(props: ButtonProps) {

    return (
    <div>
        <Image
            src={""}
            width={90}
            height={90}
            alt="Logo"
        ></Image>
        {props.title}
    </div>
    );
}