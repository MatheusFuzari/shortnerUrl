import Image, { StaticImageData } from "next/image";
import styles from './selector-card.module.css';

export interface SelectorCardProps {
    title: string;
    icon: StaticImageData;
}

export default function SelectorCard(props: SelectorCardProps) {
    return (
        <>
            <div className={styles.selectorCard}>
                <Image src={props.icon} alt="teste" height={80} width={80}></Image>
                <p>{props.title}</p>
            </div>
        </>
    );
}