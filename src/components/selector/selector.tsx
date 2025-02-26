"use client";

import React from "react";
import { useState } from "react";
import styles from './selector.module.css';
import linkSVG from '../../../public/link.svg';
import qrCodeSVG from '../../../public/qr-code.svg';
import SelectorCard from "components/selector-card/selector-card";

export default function Selector() {
  
    const [selector, setSelector] = useState<boolean>(false);
    
    return (
        <div>
            <ul className={styles.selectorList}>
                <li onClick={() => setSelector(false)} className={selector ? '' : styles.isActive}>
                    <SelectorCard icon={linkSVG} title="Link"></SelectorCard>
                </li>
                <li onClick={() => setSelector(true)} className={selector ? styles.isActive : ''}>
                    <SelectorCard icon={qrCodeSVG} title="QRCode"></SelectorCard>
                </li>
            </ul>
        </div>
    );
}
