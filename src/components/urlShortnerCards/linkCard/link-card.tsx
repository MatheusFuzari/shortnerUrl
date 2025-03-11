import { useState } from "react";
import styles from "./link-card.module.css";
import {createUrl} from "services/CreateUrl";
import Image from "next/image";
import cancelSvg from "../../../../public/cancel.svg"; 

export default function LinkCard() {

    const [link, setLink] = useState<string>("");
    const [alert, setAlert] = useState<boolean>(false);
    const [shortnedUrl, setShortnedUrl] = useState<string>("");

    const generateShortUrl = (e: React.FormEvent) => {
        e.preventDefault();

        createUrl(link).then((res) => {
            console.log(res);
            
            setShortnedUrl(`http://localhost:3000/redirect/${res.data.code}`);

            if(res.status === 200) {
                setAlert(true);
                
                setTimeout(() => {
                    setAlert(false);
                    setShortnedUrl("");
                }, 15000);

            }
        })
        .catch((error) => console.log(error));                          
    };

    const closeAlert = () => {
        setAlert(false);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shortnedUrl);
    }

    return (
        <>
        <form
            style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            }}

            onSubmit={(e) => generateShortUrl(e)}
        >
            <input
            type="text"
            placeholder="Cole seu link aqui!"
            className={styles.linkInput}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            ></input>
            <button className={styles.generateButton}>Gerar link!</button>
        </form>
        {/* style={alert ? {display: 'block'} : {display: 'none'}} */}
        <div className={styles.linkContainer} >
            <div className={styles.linkHeader}>
                <h1>Seus links encurtados</h1>
                <Image src={cancelSvg} alt="Close" height={25} width={25} onClick={() => closeAlert()}></Image>
            </div>
            <div className={styles.linkBody}>
                <p>Link original: {link}</p>
                <label htmlFor="shortnedUrl">Url encurtado: </label>
                <input id="shortnedUrl" type="text" value={shortnedUrl} readOnly></input>
                <button onClick={() => copyToClipboard()}>
                    Copiar Link
                </button>
            </div>
        </div>
        </>
    );
}
