import { type JSX } from "react";

type Size = "large" | "compact";

type Props = {
    size?: Size;
    labels: string[];
};

export default function SignatureGrid({ size = "large", labels }: Props): JSX.Element {
    const className = `as-sign-grid ${size === "large" ? "as-sign-grid--large" : "as-sign-grid--compact"
        }`;

    return (
        <div className={className}>
            {labels.map((l) => (
                <div key={l}>{l}</div>
            ))}
        </div>
    );
}