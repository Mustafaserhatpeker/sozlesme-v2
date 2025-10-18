import React, { useEffect, useMemo, useRef, useState, type JSX } from "react";

type Props = {
    name?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    style?: React.CSSProperties;

    // Opsiyoneller (varsayılanlar isteği karşılar)
    minWidthPx?: number;     // başlangıç genişliği: 30
    focusBumpPx?: number;    // odakta ek genişlik: 10
    extraPaddingPx?: number; // ölçüme eklenecek iç padding: 6
};

/**
 * İçerik kadar genişleyen satır içi input.
 * - Başlangıçta minWidthPx (30px)
 * - Odakta focusBumpPx kadar genişleme (10px)
 * - Outline/border/text-decoration yok
 * - font/line-height 'inherit' ile çevre metinle aynı görünüm
 */
export default function InlineInput({
    name,
    value,
    onChange,
    placeholder = "……",
    type = "text",
    style,
    minWidthPx = 30,
    focusBumpPx = 10,
    extraPaddingPx = 6,
}: Props): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);
    const sizerRef = useRef<HTMLSpanElement>(null);
    const [focused, setFocused] = useState(false);
    const [width, setWidth] = useState<number>(minWidthPx);

    const className = useMemo(() => "ks-inline", []);

    const measure = () => {
        const span = sizerRef.current;
        if (!span) return;

        // Boşken minWidth'te kal; içerik varsa ölç
        const content = value ?? "";
        span.textContent = content.length > 0 ? content : "";

        const measured = Math.ceil(span.getBoundingClientRect().width);
        const baseWidth = Math.max(minWidthPx, measured + extraPaddingPx);
        const focusWidth = focused ? baseWidth + focusBumpPx : baseWidth;

        setWidth(focusWidth);
    };

    useEffect(() => {
        measure();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, focused]);

    useEffect(() => {
        // Web font vb. durumlar için mount sonrası yeniden ölç
        const id = window.setTimeout(measure, 0);
        return () => window.clearTimeout(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* Ölçüm için gizli ayna */}
            <span
                ref={sizerRef}
                aria-hidden="true"
                style={{
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                    font: "inherit",
                    letterSpacing: "inherit",
                    lineHeight: "inherit",
                    padding: 0,
                    margin: 0,
                    border: 0,
                }}
            />
            <input
                ref={inputRef}
                className={className}
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    ...style,
                    width: `${width}px`,
                    minWidth: `${minWidthPx}px`,
                    maxWidth: "100%",
                }}
            />
        </>
    );
}