import type { JSX } from "react";

const labels = ["SATICI", "ARACI KURUM YA DA KİŞİ", "ALICI"] as const;

type Size = "large" | "compact" | "largev2";

type Props = {
    size?: Size;
};

export default function SignatureGrid({ size = "large" }: Props): JSX.Element {
    const className = `as-sign-grid ${size === "large" ? "as-sign-grid--large" : size === "largev2" ? "as-sign-grid--largev2" : "as-sign-grid--compact"
        }`;

    return (
        <div className={className}>
            {labels.map((l) => (
                <div key={l}>{l}</div>
            ))}
        </div>
    );
}