import React, {useState} from "react";
import {LogoIcon} from "../../assets/svg";
import {Head} from "../../components";
import styles from "./styles.module.css";
import QRCode from "react-qr-code";
interface MessageType {
    show: boolean;
    text?: string;
    type: "danger" | "warning" | "success";
}
interface QRURL {
    ready: boolean
    url: string
}

export const Home = () => {
    const [url, setUrl] = useState("");
    const [showQR, setShowQR] = useState<QRURL>({
        ready: false,
        url: ""
    });
    const [message, setMessage] = useState<MessageType>({
        show: false,
        text: "",
        type: "success",
    });
    const handleUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value.trim());
    };
    const submitUrl = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (url === "") {
            setMessage({
                show: true,
                text: "❌ URL is required",
                type: "danger",
            });
            return;
        }
        if (url.includes(" ")) {
            setMessage({
                show: true,
                text: "❌ Be sure your URL does not contain spaces",
                type: "danger",
            });
            return;
        }
        if (!url.includes("https")) {
            setMessage({
                show: true,
                text: "⚠️ For safety reason, always use https url's",
                type: "warning",
            });
        }
        setShowQR({
            ready: true,
            url: url
        });
    };
    return (
        <React.Fragment>
            <Head
                title={"QR concept"}
                description={"Generate free QR codes and download it"}
                openGraph={{
                    url: "https://qrconcept.bryanstgarcia.com",
                    type: "",
                    title: "QR concept",
                    image: "https://res.cloudinary.com/bryancloudinary/image/upload/v1709179382/qrLogo_pincsf.svg",
                    imageAlt: "QR concept, your ally",
                    description: "Generate free QR codes and download it",
                    siteName: "QR Concept",
                    locale: "en_US",
                }}
                twitterCards={{
                    summary: "Generate QR codes for free",
                    site: "@bryanstgarcia",
                    creator: "@bryanstgarcia",
                    url: "https://qrconcept.bryanstgarcia.com",
                    title: "QR concept",
                    description: "Generate free QR codes and download it",
                    image: "https://res.cloudinary.com/bryancloudinary/image/upload/v1709179382/qrLogo_pincsf.svg",
                    imageAlt: "QR concept, your ally",
                }}
            />
            <header className={`${styles["home-header-box"]} padding-xy`}>
                <div className={`${styles["home-header__logo"]}`}>
                    <LogoIcon />
                </div>
            </header>
            <main className={`${styles["home-main-box"]} padding-x`}>
                <section className={`${styles["home-main__hero"]}`}>
                    <h1 className={`${styles["home-main__hero--title"]}`}>
                        <span>Create your</span>
                        <span>QR code</span>
                        <span>and get the job done</span>
                        <span>🎉</span>
                    </h1>
                    {
                        message.show ? (
                            <p>{message.text}</p>
                        ) : null
                    }
                    <form
                        className={`${styles["home-main__hero--form"]}`}
                        onSubmit={submitUrl}
                    >
                        <div className={`${styles["hero__form--fields"]}`}>
                            <label htmlFor="qr-url">URL</label>
                            <input
                                id="qr-url"
                                className={``}
                                type="text"
                                placeholder="Introduce your url 📎"
                                onChange={handleUrl}
                                value={url}
                            />
                            <button className={``} type="reset">
                                x
                            </button>
                        </div>
                        <button className={``} type="submit">
                            Create
                        </button>
                    </form>
                    {showQR.ready ? (
                        <div className={`${styles["qr-code-box"]}`}>
                            <QRCode
                                size={180}
                                value={url}
                            />
                            <p>{showQR.url}</p>
                        </div>
                    ) : null}
                </section>
            </main>
            <footer className={`${styles["home-footer-box"]} padding-xy`}>
                <p>
                    Made with ♥️ by{" "}
                    <a
                        href={`https://github.com/bryanstgarcia`}
                        target="_blank"
                    >
                        @bryanstgarcia
                    </a>
                </p>
            </footer>
        </React.Fragment>
    );
};
