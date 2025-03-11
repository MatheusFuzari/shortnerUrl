import Image, { StaticImageData } from "next/image";
import styles from './selector-option.module.css';

export interface SelectorOptionProps {
    title: string;
    icon: StaticImageData;
}

export default function SelectorOption(props: SelectorOptionProps) {
    return (
        <>
            <div className={styles.selectorOption}>
                <Image src={props.icon} alt={props.icon+" Icon"} height={50} width={50}></Image>
                <p>{props.title}</p>
            </div>
        </>
    );
}