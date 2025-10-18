import React, { type JSX } from "react";

type Props = {
    name?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    style?: React.CSSProperties;
};

export default function InlineInput({
    name,
    value,
    onChange,
    placeholder = "……",
    type = "text",
    style,
}: Props): JSX.Element {
    return (
        <input
            className="ks-inline"
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            style={style}
        />
    );
}