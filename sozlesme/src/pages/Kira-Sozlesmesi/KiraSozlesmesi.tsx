import { useMemo, useReducer, type JSX } from "react";
import "./KiraSozlesmesi.css";
import FormRow from "./components/FormRow";
import InlineInput from "./components/InlineInput";
import SignatureGrid from "./components/SignatureGrid";
import { INFO_FIELDS, type InfoFieldKey } from "./fields";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type InlineKeys =
    | "monthlyRent"
    | "yearlyRent"
    | "deposit"
    | "paymentDueDays"
    | "propertyUseClause";

type FormState = Record<InfoFieldKey, string> & Record<InlineKeys, string>;

type Action =
    | { type: "SET"; key: keyof FormState; value: string }
    | { type: "RESET"; payload: FormState };

function createInitialState(): FormState {
    const base = INFO_FIELDS.reduce((acc, f) => {
        acc[f.key as InfoFieldKey] = "";
        return acc;
    }, {} as Record<InfoFieldKey, string>);

    return {
        ...base,
        monthlyRent: "",
        yearlyRent: "",
        deposit: "",
        paymentDueDays: "",
        propertyUseClause: "",
    };
}

function reducer(state: FormState, action: Action): FormState {
    switch (action.type) {
        case "SET":
            return { ...state, [action.key]: action.value };
        case "RESET":
            return action.payload;
        default:
            return state;
    }
}

function KiraSozlesmesi(): JSX.Element {
    const initialState = useMemo(createInitialState, []);
    const [form, dispatch] = useReducer(reducer, initialState);
    const printRef = useRef<HTMLDivElement>(null);
    const setField =
        (key: keyof FormState) =>
            (value: string): void =>
                dispatch({ type: "SET", key, value });

    const handleDownloadPDF = async () => {
        const element = printRef.current;
        if (!element) return;

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save("kira-sozlesmesi.pdf");
    };


    return (
        <main className="ks-container">
            <div ref={printRef}>
                <header className="ks-card ks-card--spaced">
                    <h1 className="ks-title">KİRA SÖZLEŞMESİ</h1>

                    <section className="ks-info ks-box">
                        {INFO_FIELDS.map((f) => (
                            <FormRow
                                key={f.key}
                                label={f.label}
                                type={'type' in f ? f.type : "text"}
                                placeholder={'placeholder' in f ? f.placeholder : "Bilgi giriniz..."}
                                name={f.key}
                                value={form[f.key]}
                                onChange={setField(f.key)}
                            />
                        ))}
                    </section>

                    <SignatureGrid size="large" />
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
                            <InlineInput
                                name="monthlyRent"
                                value={form.monthlyRent}
                                onChange={setField("monthlyRent")}
                                placeholder="……"
                            />{" "}
                            TL’dir. Kira sözleşmesinin imzası ile birlikte kiraya verene yıllık
                            kira bedeli olan{" "}
                            <InlineInput
                                name="yearlyRent"
                                value={form.yearlyRent}
                                onChange={setField("yearlyRent")}
                                placeholder="……"
                            />{" "}
                            TL ile depozito bedeli{" "}
                            <InlineInput
                                name="deposit"
                                value={form.deposit}
                                onChange={setField("deposit")}
                                placeholder="……"
                            />{" "}
                            TL’yi peşin ve nakit olarak ödenecektir.
                        </li>
                        <li>
                            Aylık kira bedeli, sözleşmenin başlangıç tarihine göre her ay
                            başında ve ayın ilk 6 günü içinde takip eden ilk{" "}
                            <InlineInput
                                name="paymentDueDays"
                                value={form.paymentDueDays}
                                onChange={setField("paymentDueDays")}
                                placeholder="……"
                            />{" "}
                            gün ödenir. Aksi halde kiralayanın banka hesap numarasına
                            ödenecektir.
                        </li>
                        <li>
                            İki aylık kira bedeli üst üste süresi içinde ödenmemesi halinde
                            Kiraya Veren tahliye sürecini başlatabilir.
                        </li>
                        <li>
                            Kiralanan/mecur,{" "}
                            <InlineInput
                                name="propertyUseClause"
                                value={form.propertyUseClause}
                                onChange={setField("propertyUseClause")}
                                placeholder="……"
                            />{" "}
                            olarak kiraya verilmiş olup, yalnızca bu amaç ile kiracı tarafından
                            kullanılabilir.
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
                            Sözleşme bitiminde kiralanan boşaltılmazsa doğacak zararları kiracı
                            tazmin eder.
                        </li>
                        <li>
                            Damga vergisi, noter masrafı ve belediye harçları kiracıya aittir.
                        </li>
                    </ol>

                    <SignatureGrid size="largev2" />
                </section>
            </div>
            <button
                className="pdf-download-btn"
                onClick={handleDownloadPDF}
            >
                PDF İndir
            </button>

        </main>
    );
}

export default KiraSozlesmesi;