import type { JSX } from "react";

const labels = ["MAL SAHİBİ", "1. KEFİL", "2. KEFİL", "KİRACI"] as const;

type Size = "large" | "compact" | "largev2";

type Props = {
    size?: Size;
};

export default function SignatureGrid({ size = "large" }: Props): JSX.Element {
    const className = `ks-sign-grid ${size === "large" ? "ks-sign-grid--large" : "ks-sign-grid--compact"
        }`;

    return (
        <div className={className}>
            {labels.map((l) => (
                <div key={l}>{l}</div>
            ))}
        </div>
    );
}