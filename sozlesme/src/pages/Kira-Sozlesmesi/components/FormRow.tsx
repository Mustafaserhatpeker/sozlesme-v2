import { memo, useId, type JSX } from "react";
import type { FieldType } from "../fields";

type Props = {
    label: string;
    type?: FieldType | "text";
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    name?: string;
};

const FormRow = memo(function FormRow({
    label,
    type = "text",
    value,
    onChange,
    placeholder = "Bilgi giriniz...",
    name,
}: Props): JSX.Element {
    const id = useId();

    return (
        <div className="ks-row">
            <label className="ks-label" htmlFor={id}>
                {label}
            </label>
            <div className="ks-field">
                {type === "textarea" ? (
                    <textarea
                        id={id}
                        className="ks-textarea"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        name={name}
                    />
                ) : (
                    <input
                        id={id}
                        type={type}
                        className="ks-input"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        name={name}
                    />
                )}
            </div>
        </div>
    );
});

export default FormRow;