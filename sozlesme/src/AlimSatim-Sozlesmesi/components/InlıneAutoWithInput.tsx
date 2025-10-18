import React, { useEffect, useMemo, useRef, useState } from "react";

type InlineAutoWidthInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange"
> & {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    minWidthPx?: number;   // default 30
    focusBumpPx?: number;  // default 10
    extraPaddingPx?: number; // internal padding to add, default 6
};

/**
 * An inline input that auto-sizes to its content.
 * - Starts at minWidthPx (default 30px)
 * - On focus, increases width slightly by focusBumpPx (default 10px)
 * - No outline, border, or text decoration
 * - Inherits font properties from parent to perfectly match surrounding text
 */
const InlineAutoWidthInput: React.FC<InlineAutoWidthInputProps> = ({
    className,
    value,
    onChange,
    placeholder,
    minWidthPx = 30,
    focusBumpPx = 10,
    extraPaddingPx = 6,
    style,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const sizerRef = useRef<HTMLSpanElement>(null);
    const [focused, setFocused] = useState(false);
    const [width, setWidth] = useState<number>(minWidthPx);

    const mergedClassName = useMemo(
        () => ["as-inline-input", className].filter(Boolean).join(" "),
        [className]
    );

    const measure = () => {
        const span = sizerRef.current;
        if (!span) return;

        // When empty, stay at minWidth. We only measure actual value content.
        const content = value ?? "";
        span.textContent = content.length > 0 ? content : "";

        // Ensure the mirror span uses the same fonts as the input
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
        // Re-measure once fonts are ready (safety in case of web fonts)
        const handle = window.setTimeout(() => measure(), 0);
        return () => window.clearTimeout(handle);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* Hidden mirror to measure content width */}
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
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={mergedClassName}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    ...style,
                    width: `${width}px`,
                    minWidth: `${minWidthPx}px`,
                    maxWidth: "100%",
                }}
                {...rest}
            />
        </>
    );
};

export default InlineAutoWidthInput;