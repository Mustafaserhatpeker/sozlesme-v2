import { useMemo, useReducer, type JSX } from "react";
import "./AlimSatimSozlesmesi.css";
import { BUSINESS_FIELDS, SELLER_FIELDS, BUYER_FIELDS, PROPERTY_FIELDS, ALL_FIELDS, type AllFieldKey } from "./fields";
import FormRow from "./components/FormRow";
import SignatureGrid from "./components/SignatureGrid";

type FormState = Record<AllFieldKey, string>;

type Action =
    | { type: "SET"; key: AllFieldKey; value: string }
    | { type: "RESET"; payload: FormState };

function createInitialState(): FormState {
    return ALL_FIELDS.reduce((acc, f) => {
        acc[f.key] = "";
        return acc;
    }, {} as FormState);
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

function AlimSatimSozlesmesi(): JSX.Element {
    const initialState = useMemo(createInitialState, []);
    const [form, dispatch] = useReducer(reducer, initialState);
    const setField =
        (key: AllFieldKey) =>
            (value: string): void =>
                dispatch({ type: "SET", key, value });

    return (
        <main className="as-container">
            <header className="as-card as-card--spaced">
                <h1 className="as-title">ALIM SATIMA ARACILIK SÖZLEŞMESİ</h1>

                <section className="as-box">
                    <h2 className="as-subtitle">İşletme Bilgileri</h2>
                    {BUSINESS_FIELDS.map((f) => (
                        <FormRow
                            key={f.key}
                            label={f.label}
                            type={'type' in f ? (f.type as any) : "text"}
                            placeholder={'placeholder' in f ? f.placeholder as any : "Bilgi giriniz..."}
                            name={f.key}
                            value={form[f.key]}
                            onChange={setField(f.key)}
                        />
                    ))}
                </section>
            </header>

            <section className="as-card as-card--spaced">
                <h2 className="as-subtitle">Satıcı ve Alıcı Bilgileri</h2>

                <div className="as-group">
                    <h3 className="as-section-title">Satıcı Bilgileri</h3>
                    {SELLER_FIELDS.map((f) => (
                        <FormRow
                            key={f.key}
                            label={f.label}
                            type={'type' in f ? (f.type as any) : "text"}
                            placeholder={'placeholder' in f ? f.placeholder : "Bilgi giriniz..."}
                            name={f.key}
                            value={form[f.key]}
                            onChange={setField(f.key)}
                        />
                    ))}
                </div>

                <div className="as-divider" />

                <div className="as-group">
                    <h3 className="as-section-title">Alıcı Bilgileri</h3>
                    {BUYER_FIELDS.map((f) => (
                        <FormRow
                            key={f.key}
                            label={f.label}
                            type={'type' in f ? (f.type as any) : "text"}
                            placeholder={'placeholder' in f ? f.placeholder : "Bilgi giriniz..."}
                            name={f.key}
                            value={form[f.key]}
                            onChange={setField(f.key)}
                        />
                    ))}
                </div>
            </section>

            <section className="as-card as-card--spaced">
                <h2 className="as-subtitle">Taşınmaz Bilgileri</h2>
                {PROPERTY_FIELDS.map((f) => (
                    <FormRow
                        key={f.key}
                        label={f.label}
                        type={'type' in f ? (f.type as any) : "text"}
                        placeholder={'placeholder' in f ? f.placeholder : "Bilgi giriniz..."}
                        name={f.key}
                        value={form[f.key]}
                        onChange={setField(f.key)}
                    />
                ))}

                <SignatureGrid
                    size="compact"
                    labels={["İŞLETME SAHİBİ", "MÜLK SAHİBİ", "ALICI"]}
                />
            </section>
        </main>
    );
}

export default AlimSatimSozlesmesi;