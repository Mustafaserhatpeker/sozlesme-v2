import { type JSX } from "react";
import "./AlimSatimSozlesmesi.css";
import SignatureGrid from "./components/SıgnatureGrid";
function KiraSozlesmesi(): JSX.Element {

    const isletmeBilgileri = {
        isletmeAdiSoyadi: "",
        isletmeTCNo: "",
        isletmeTelefonu: "",
        isletmeUnvani: "",
        isletmeAdresi: "",
        isletmeOdaSicilNo: "",
    };

    const aliciBilgileri = {
        aliciAdiSoyadi: "",
        aliciTCNo: "",
        aliciTelefonu: "",
        aliciIkametgah: "",
    };

    const saticiBilgileri = {
        saticiAdiSoyadi: "",
        saticiTCNo: "",
        saticiTelefonu: "",
        saticiIkametgah: "",
    };

    const tasinmazBilgileri = {
        tasinmazCinsi: "",
        tasinmazIl: "",
        tasinmazIlce: "",
        tasinmazMahalleKoy: "",
        tasinmazTapuBilgileri: "",
    };


    return (
        <main className="as-container">
            <div className="as-contract">
                <h1 className="as-title">ALIM SATIM SÖZLEŞMESİ</h1>
                <section className="as-section">
                    <h3>İşletme Bilgileri</h3>
                    <ul className="as-section-ul">
                        <li className="as-section-li">
                            <span>İşletme Adı Soyadı: {isletmeBilgileri.isletmeAdiSoyadi}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                        <li className="as-section-li">
                            <span>TC No: {isletmeBilgileri.isletmeTCNo}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                        <li className="as-section-li">
                            <span>Telefon: {isletmeBilgileri.isletmeTelefonu}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                        <li className="as-section-li">
                            <span>Unvan: {isletmeBilgileri.isletmeUnvani}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                        <li className="as-section-li">
                            <span>Adres: {isletmeBilgileri.isletmeAdresi}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                        <li className="as-section-li">
                            <span>Oda Sicil No: {isletmeBilgileri.isletmeOdaSicilNo}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                    </ul>
                </section>
                <section className="as-section">
                    <h2>Satıcı ve Alıcı Bilgileri</h2>
                    <div className="as-subsection">
                        <h3>Satıcı Bilgileri</h3>
                        <ul className="as-section-ul">
                            <li className="as-section-li">
                                <span>Adı Soyadı: {saticiBilgileri.saticiAdiSoyadi}</span>
                                <input type="text" placeholder="Bilgi Giriniz..." />
                            </li>
                            <li className="as-section-li">
                                <span>TC No: {saticiBilgileri.saticiTCNo}</span>
                                <input type="text" placeholder="Bilgi Giriniz..." />
                            </li>
                            <li className="as-section-li">
                                <span>Telefon: {saticiBilgileri.saticiTelefonu}</span>
                                <input type="text" placeholder="Bilgi Giriniz..." />
                            </li>
                            <li className="as-section-li">
                                <span>İkametgah: {saticiBilgileri.saticiIkametgah}</span>
                                <input type="text" placeholder="Bilgi Giriniz..." />
                            </li>
                        </ul>
                    </div>
                    <div className="as-subsection">
                        <h3>Alıcı Bilgileri</h3>
                        <ul className="as-section-ul">
                            <li className="as-section-li">
                                <span>Adı Soyadı: {aliciBilgileri.aliciAdiSoyadi}</span>
                                <input type="text" placeholder="Bilgi Giriniz..." />
                            </li>
                            <li className="as-section-li">
                                <span>TC No: {aliciBilgileri.aliciTCNo}</span>
                                <input type="text" placeholder="Bilgi Giriniz..." />
                            </li>
                            <li className="as-section-li">
                                <span>Telefon: {aliciBilgileri.aliciTelefonu}</span>
                                <input type="text" placeholder="Bilgi Giriniz..." />
                            </li>
                            <li className="as-section-li">
                                <span>İkametgah: {aliciBilgileri.aliciIkametgah}</span>
                                <input type="text" placeholder="Bilgi Giriniz..." />
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="as-section">
                    <h3>Taşınmaz Bilgileri</h3>
                    <ul className="as-section-ul">
                        <li className="as-section-li">
                            <span>Taşınmaz Cinsi: {tasinmazBilgileri.tasinmazCinsi}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                        <li className="as-section-li">
                            <span>İl: {tasinmazBilgileri.tasinmazIl}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                        <li className="as-section-li">
                            <span>İlçe: {tasinmazBilgileri.tasinmazIlce}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                        <li className="as-section-li">
                            <span>Mahalle/Köy: {tasinmazBilgileri.tasinmazMahalleKoy}</span>
                            <input type="text" placeholder="Bilgi Giriniz..." />
                        </li>
                        <li className="as-section-li-textarea">
                            <span>Tapu Bilgileri: {tasinmazBilgileri.tasinmazTapuBilgileri}</span>
                            <textarea placeholder="Bilgi Giriniz..." />
                        </li>
                    </ul>
                </section>
                <SignatureGrid size="large" />
            </div>


        </main>
    );
}

export default KiraSozlesmesi;