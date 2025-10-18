import { useState, type JSX } from "react";
import "./AlimSatimSozlesmesi.css";
import SignatureGrid from "./components/SıgnatureGrid";

function KiraSozlesmesi(): JSX.Element {
    // Form states (üst kısım)
    const [isletmeBilgileri] = useState({
        isletmeAdiSoyadi: "",
        isletmeTCNo: "",
        isletmeTelefonu: "",
        isletmeUnvani: "",
        isletmeAdresi: "",
        isletmeOdaSicilNo: "",
    });

    const [aliciBilgileri] = useState({
        aliciAdiSoyadi: "",
        aliciTCNo: "",
        aliciTelefonu: "",
        aliciIkametgah: "",
    });

    const [saticiBilgileri] = useState({
        saticiAdiSoyadi: "",
        saticiTCNo: "",
        saticiTelefonu: "",
        saticiIkametgah: "",
    });

    const [tasinmazBilgileri] = useState({
        tasinmazCinsi: "",
        tasinmazIl: "",
        tasinmazIlce: "",
        tasinmazMahalleKoy: "",
        tasinmazTapuBilgileri: "",
    });

    // GENEL ŞARTLAR içindeki "....." alanlarının kullanıcı tarafından doldurulabilmesi için state
    const [genelSartlar, setGenelSartlar] = useState({
        // 1. madde
        satisBedeliTL: "",
        hizmetBedeliTutar: "",

        // 3. madde (Mülk Sahibi ve/veya Alıcı kusurundan doğan cezai şart tutarları)
        cezaiTutarMulksahibi: "",
        cezaiTutarAlici: "",

        // 4. madde (Yetkili mahkeme/yer)
        yetkiliMahkemeYeri: "",

        // Özel şartlar
        masrafPaylasimSekli: "",
        ozelSartlarMetni: "",
    });

    const onChange =
        (key: keyof typeof genelSartlar) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setGenelSartlar((prev) => ({ ...prev, [key]: e.target.value }));
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

            <div className="as-contract">
                <h1 className="as-title">GENEL ŞARTLAR</h1>

                {/* Giriş paragrafı (fotodaki metne göre) */}
                <p className="as-preamble">
                    Yukarıda yazılı taraflar arasında, yukarıda özellikleri gösterilmiş bulunan gayrimenkulün
                    satılması ile ilgili olarak İşletme, Mülk Sahibi ve Alıcı arasında aşağıda yazılı şartlarla
                    bir &quot;Alım Satıma Aracılık Sözleşmesi&quot; kurulmuştur.
                </p>

                <ol className="as-clauses">
                    <li>
                        İşletme, işbu Hizmet Bedeli akdi ile akdin konusu olan gayrimenkule,&nbsp;
                        <input
                            className="as-inline-input"
                            type="text"
                            placeholder="........ TL"
                            value={genelSartlar.satisBedeliTL}
                            onChange={onChange("satisBedeliTL")}
                        />
                        &nbsp;satış bedeli karşılığı alıcı bulmak üzere pazarlama faaliyetlerini yapmak ve bu
                        mesleki faaliyeti sonucunda Mülk Sahibi ile Alıcı arasında satış akdinin kurulmasını
                        temin etmek görevini üstlenmiştir. Buna karşılık Mülk Sahibi ve Alıcı, bu hizmet
                        karşılığında İşletme&apos;ye, satış bedelinin toplamda&nbsp;
                        <input
                            className="as-inline-input"
                            type="text"
                            placeholder="........"
                            value={genelSartlar.hizmetBedeliTutar}
                            onChange={onChange("hizmetBedeliTutar")}
                        />
                        &nbsp;+ KDV tutarına karşılık gelen meblağı Hizmet Bedeli ücreti olarak ödemeyi kabul ve
                        taahhüt eder.
                    </li>

                    <li>
                        Mülk Sahibi, satılmasını istediği gayrimenkulün tapu aslını ibraz ederek tapunun ve nüfus
                        cüzdanının tasdikli birer örneğini İşletme&apos;ye teslim edecektir. Şayet bu akdi
                        imzalayan satıcı, Mülk Sahibi değilse; yukarıda yazılı belgelerle birlikte ayrıca Mülk
                        Sahibi tarafından hem satış işlemleri hem de İşletme ile gayrimenkulün satılmasına
                        aracılık akdini yapma hususunda açıkça yetki verildiğini gösteren noter düzenlemeli
                        vekâletnamenin aslını ibraz edip onaylı örneğini İşletme&apos;ye teslim edecektir.
                    </li>

                    <li>
                        Mülk Sahibi veya vekili, işbu sözleşmenin taraflar arasında imzalanmasından sonra bu akdin
                        konusu olan gayrimenkulün satılmasından vazgeçmesi, üçüncü bir gerçek veya tüzel kişi ile
                        akit yapmak istemesi veya kendisinin satmak istemesi ve bunlarla sınırlı olmaksızın Mülk
                        Sahibi&apos;nin kendi kusuru nedeniyle işbu sözleşmenin ifa edilememesi hallerinde; İşletme&apos;ye
                        satış bedelinin toplamda&nbsp;
                        <input
                            className="as-inline-input"
                            type="text"
                            placeholder="........"
                            value={genelSartlar.cezaiTutarMulksahibi}
                            onChange={onChange("cezaiTutarMulksahibi")}
                        />
                        &nbsp;+ KDV tutarına karşılık gelen meblağı cezai şart olarak ödemeyi kabul ve taahhüt
                        eder. Alıcı, işbu sözleşmenin taraflarca imzalanmasından sonra bu akdin konusu olan
                        gayrimenkulü satın almaktan vazgeçmesi ve/veya Alıcı&apos;nın kusuru nedeniyle işbu
                        sözleşmenin hiç veya gereği gibi ifa edilememesi halinde; İşletme&apos;ye satış bedelinin
                        toplamda&nbsp;
                        <input
                            className="as-inline-input"
                            type="text"
                            placeholder="........"
                            value={genelSartlar.cezaiTutarAlici}
                            onChange={onChange("cezaiTutarAlici")}
                        />
                        &nbsp;+ KDV tutarına karşılık gelen meblağı cezai şart olarak ödemeyi kabul ve taahhüt
                        eder.
                    </li>

                    <li>
                        İşbu akid yukarıda yazılı şartlar ve ayrıca aşağıda belirtilecek özel şartlarla birlikte
                        geçerli olmak üzere karşılıklı olarak kabul ve taahhüt edilmiştir. İşbu akid ile ilgili
                        doğabilecek ihtilaflarda&nbsp;
                        <input
                            className="as-inline-input"
                            type="text"
                            placeholder="........ (ör. İstanbul)"
                            value={genelSartlar.yetkiliMahkemeYeri}
                            onChange={onChange("yetkiliMahkemeYeri")}
                        />
                        &nbsp;Mahkemeleri ve İcra Daireleri yetkilidir. Taraflar isterse, uyuşmazlığın çözümü
                        için arabuluculuk gibi alternatif çözüm yollarına başvurabilir.
                    </li>
                </ol>

                <h3 className="as-subtitle">ÖZEL ŞARTLAR</h3>
                <div className="as-special-terms">
                    <p>
                        İşletme&apos;nin bu akitten kaynaklanan hizmeti yerine getirirken yapacağı masraflar (tapu
                        harcı, döner sermaye hizmet bedeli, vb.) İş Sahibi ve Alıcı arasında&nbsp;
                        <input
                            className="as-inline-input"
                            type="text"
                            placeholder="........ (ör. %50 - %50)"
                            value={genelSartlar.masrafPaylasimSekli}
                            onChange={onChange("masrafPaylasimSekli")}
                        />
                        &nbsp;şeklinde paylaşılacaktır.
                    </p>
                    <textarea
                        className="as-textarea"
                        placeholder="Diğer özel şartları buraya yazınız..."
                        value={genelSartlar.ozelSartlarMetni}
                        onChange={onChange("ozelSartlarMetni")}
                        rows={5}
                    />
                </div>

                <SignatureGrid size="compact" />
            </div>
        </main>
    );
}

export default KiraSozlesmesi;