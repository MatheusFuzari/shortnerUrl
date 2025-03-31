import { url } from "inspector";
import QRCode from "qrcode";
import { useState } from "react";
import { createUrl } from "services/CreateUrl";
import styles from "./qr-code.module.css";
import Image from "next/image";
import cancelSvg from "../../../../public/cancel.svg";

export default function QrCodeCard() {
  const [link, setLink] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);
  const [copyAlert, setCopyAlert] = useState<boolean>(false);
  const [shortnedUrl, setShortnedUrl] = useState<string>("");
  const [qrCodeImg, setqrCodeImg] = useState<string | null>(null);

  const generateShortUrl = (e: React.FormEvent) => {
    e.preventDefault();

    createUrl(link)
      .then((res) => {
        console.log(res);

        const url = `http://localhost:3000/redirect/${res.data.code}`;
        setShortnedUrl(url);
        if (res.status === 200) {
          setAlert(true);

          generateQrCode(url);

          setTimeout(() => {
            setAlert(false);
            setShortnedUrl("");
          }, 15000);

          console.log(shortnedUrl);
        }
      })
      .catch((error) => console.log(error));
  };

  const generateQrCode = (url: string) => {
    QRCode.toDataURL(url)
      .then((url) => {
        setqrCodeImg(url);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const closeAlert = () => {
    setAlert(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortnedUrl);

    setCopyAlert(true);

    setTimeout(() => {
      setCopyAlert(false);
    }, 3000);
  };

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
        onSubmit={(e) => {
          e.preventDefault();
          generateShortUrl(e);
        }}
      >
        <input
          type="text"
          placeholder="Cole seu link aqui!"
          className={styles.linkInput}
          value={link}
          onChange={(e) => setLink(e.target.value)}
        ></input>
        <button className={styles.generateButton}>Gerar QRCode!</button>
      </form>
      <div className={styles.linkContainer}>
        <div className={styles.linkHeader}>
          <Image
            src={cancelSvg}
            alt="Close"
            height={25}
            width={25}
            onClick={() => closeAlert()}
          ></Image>
          <div>
            {qrCodeImg ? (
              <a href={qrCodeImg} download="qrcode.png">
                <Image
                  src={qrCodeImg}
                  alt="QrCodeImage"
                  height={150}
                  width={150}
                  onClick={() => copyToClipboard()}
                ></Image>
              </a>
            ) : (
              <p>Erro ao gerar o QRCode...</p>
            )}
          </div>
        </div>
      </div>
      <div
        style={copyAlert ? { display: "block" } : { display: "none" }}
        className={styles.copyAlert}
      >
        <p>QRCode copiado!</p>
      </div>
    </>
  );
}
