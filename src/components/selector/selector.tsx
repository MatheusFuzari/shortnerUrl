import React, { useContext } from "react";
import styles from './selector.module.css';
import linkSVG from '../../../public/link.svg';
import qrCodeSVG from '../../../public/qr-code.svg';
import { SelectorContext } from "app/page";
import SelectorOption from "components/selector-option/selector-option";



export default function Selector() {
    
    const value = useContext(SelectorContext);
    
    return (
        <div>
            <ul className={styles.selectorList}>
                <li onClick={() => value.setSelector(false)} className={value.selector ? '' : styles.isActive}>
                    <SelectorOption icon={linkSVG} title="Link"></SelectorOption>
                </li>
                <li onClick={() => value.setSelector(true)} className={value.selector ? styles.isActive : ''}>
                    <SelectorOption icon={qrCodeSVG} title="QRCode"></SelectorOption>
                </li>
            </ul>
        </div>
    );
}
