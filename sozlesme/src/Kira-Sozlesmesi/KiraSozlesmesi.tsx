import "./KiraSozlesmesi.css";
function KiraSozlesmesi() {
    return (
        <main className="ks-container">
            <header className="ks-card ks-card--spaced">
                <h1 className="ks-title">KİRA SÖZLEŞMESİ</h1>

                <section className="ks-info ks-box">
                    {[
                        "Taşınmazın İli / İlçesi",
                        "Taşınmazın Mahallesi",
                        "Taşınmazın Caddesi / Sokağı",
                        "Taşınmazın Kapı / Ada Parsel Numarası",
                        "Taşınmazın Cinsi",
                        "Kiraya Verenin Adı Soyadı / Ticari Ünvanı",
                        "Kiraya Verenin T.C. Kimlik / Vergi Kimlik Numarası",
                        "Kiraya Verenin Ev / İş Adresi",
                        "Kiraya Verenin Telefon Numarası",
                        "Kiracının Adı Soyadı / Ticari Ünvanı",
                        "Kiracının T.C. Kimlik / Vergi Kimlik Numarası",
                        "Kiracının Ev / İş Adresi",
                        "Kiracının Telefon Numarası",
                        "Bir Aylık Kira Bedeli",
                        "Bir Yıllık Kira Bedeli",
                        "Kiranın Nasıl Ödeneceği ve Kiranın Ödeneceği Banka Hesap Bilgileri",
                        "Taşınmazın Şimdiki Durumu",
                        "Taşınmazın Kiralanma Amacı",
                    ].map((label, i) => (
                        <div className="ks-row" key={i}>
                            <label className="ks-label">{label}</label>
                            <div className="ks-field">
                                <input
                                    type="text"
                                    className="ks-input"
                                    placeholder="Bilgi giriniz..."
                                />
                            </div>
                        </div>
                    ))}

                    <div className="ks-row">
                        <label className="ks-label">Kira Başlangıç Tarihi</label>
                        <div className="ks-field">
                            <input type="date" className="ks-input" />
                        </div>
                    </div>

                    <div className="ks-row">
                        <label className="ks-label">Kira Bitiş Tarihi</label>
                        <div className="ks-field">
                            <input type="date" className="ks-input" />
                        </div>
                    </div>

                    <div className="ks-row">
                        <label className="ks-label">
                            Taşınmaz ile Teslim Edilen Demirbaş Eşyaların Beyanı
                        </label>
                        <div className="ks-field">
                            <textarea
                                className="ks-textarea"
                                placeholder="Detayları giriniz..."
                            ></textarea>
                        </div>
                    </div>
                </section>

                <div className="ks-sign-grid ks-sign-grid--large">
                    <div>MAL SAHİBİ</div>
                    <div>1. KEFİL</div>
                    <div>2. KEFİL</div>
                    <div>KİRACI</div>
                </div>
            </header>

            <section className="ks-card ks-card--spaced">
                <h2 className="ks-subtitle">ÖZEL KOŞULLAR</h2>

                <ol className="ks-clauses">
                    <li>
                        Kira süresi 1 (bir) yıldır. Kira sözleşmesinin bitiminden 2 (iki) ay
                        önceden noterden bildirim ile kiracı, sözleşmeyi feshedebilir. Bu
                        halde kiracının diğer sorumlulukları ortadan kalkmaz. Kiracı
                        1.(birinci) yılı olmadan önce mecurdan ayrılacak olursa, kalan
                        ayların kiralarını ödemeyi kabul eder.
                    </li>
                    <li>
                        İşbu kira sözleşmesi 1 yıllık süre dolmadan 2 (iki) ay önceden
                        yenilenmeyeceği Kiracı tarafından bildirilmedikçe otomatik olarak
                        birer yıllık süre ile yenilenebilir. Kira sözleşmesinin otomatik
                        uzaması durumunda kira bedeli, TÜİK tarafından açıklanan ve bir
                        önceki kira yılının tüketici fiyat endeksindeki on iki aylık
                        ortalaması oranında artırılacaktır.
                    </li>
                    <li>
                        Kira bedeli aylık net{" "}
                        <input className="ks-inline" placeholder="……" /> TL’dir. Kira
                        sözleşmesinin imzası ile birlikte kiraya verene yıllık kira bedeli
                        olan <input className="ks-inline" placeholder="……" /> TL ile
                        depozito bedeli{" "}
                        <input className="ks-inline" placeholder="……" /> TL’yi peşin ve
                        nakit olarak ödenecektir.
                    </li>
                    <li>
                        Aylık kira bedeli, sözleşmenin başlangıç tarihine göre her ay
                        başında ve ayın ilk 6 günü içinde takip eden ilk{" "}
                        <input className="ks-inline" placeholder="……" /> gün ödenir. Aksi
                        halde kiralayanın banka hesap numarasına ödenecektir.
                    </li>
                    <li>
                        İki aylık kira bedeli üst üste süresi içinde ödenmemesi halinde
                        Kiraya Veren tahliye sürecini başlatabilir.
                    </li>
                    <li>
                        Kiralanan/mecur,{" "}
                        <input className="ks-inline" placeholder="……" /> olarak kiraya
                        verilmiş olup, yalnızca bu amaç ile kiracı tarafından kullanılabilir.
                    </li>
                    <li>
                        Kira bedeli nettir. Her türlü kanuni ve idari vergi, fon, resim,
                        harç, elektrik, su, doğalgaz, apartman giderleri kiracıya aittir.
                    </li>
                    <li>
                        Mecurda ısıtma, yakıt, elektrik, su, güvenlik ve bakım giderleri
                        kiracıya aittir. Ödenmemesi durumunda faiz uygulanır.
                    </li>
                    <li>
                        Kiracı, mecurun bir kısmını veya tamamını üçüncü kişilere devredemez
                        ya da alt kiraya veremez. Ancak Kiraya Veren’in yazılı izni ile
                        devredebilir.
                    </li>
                    <li>
                        Kiracı, mecurun dış cephesine veya yapısına zarar verecek değişiklik
                        yapamaz. Dekoratif düzenlemeler yapabilir ancak bu masraflar kendi
                        sorumluluğundadır.
                    </li>
                    <li>
                        Kiracı, kiralananı aldığı şekilde geri teslim etmekle yükümlüdür.
                        Demirbaşlar kaybolur veya zarar görürse bedelini ödemek zorundadır.
                    </li>
                    <li>
                        Kiracı, sözleşmenin son ayında mecuru görmek isteyen kişilere izin
                        vermek zorundadır.
                    </li>
                    <li>
                        Sözleşme bitiminde kiralanan boşaltılmazsa doğacak zararları
                        kiracı tazmin eder.
                    </li>
                    <li>
                        Damga vergisi, noter masrafı ve belediye harçları kiracıya aittir.
                    </li>
                </ol>

                <div className="ks-sign-grid ks-sign-grid--compact">
                    <div>MAL SAHİBİ</div>
                    <div>1. KEFİL</div>
                    <div>2. KEFİL</div>
                    <div>KİRACI</div>
                </div>
            </section>
        </main>
    );
}

export default KiraSozlesmesi;
