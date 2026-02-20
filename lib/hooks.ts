/**
 * Custom React hooks for the application
 */

import { useState, useMemo, useCallback } from "react";
import type { TextStats } from "@/types";
import {
    COPY_FEEDBACK_DURATION,
    DOWNLOAD_FILENAME,
    TEXT_MIME_TYPE,
} from "@/config/constants";

/**
 * Calculates text statistics
 * 
 * @param text - Input text
 * @returns Text statistics
 */
function calculateTextStats(text: string): TextStats {
    const trimmedText = text.trim();
    return {
        characters: text.length,
        words: trimmedText === "" ? 0 : trimmedText.split(/\s+/).length,
        lines: trimmedText === "" ? 0 : text.split(/\n/).length,
    };
}

/**
 * Hook for case converter functionality
 * Manages text state, statistics, and actions
 * 
 * @returns Case converter state and actions
 */
export function useCaseConverter() {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);

    const stats = useMemo(() => calculateTextStats(text), [text]);

    /**
     * Copies text to clipboard
     */
    const handleCopy = useCallback(async () => {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    }, [text]);

    /**
     * Downloads text as a file
     */
    const handleDownload = useCallback(() => {
        if (!text) return;
        const blob = new Blob([text], { type: TEXT_MIME_TYPE });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = DOWNLOAD_FILENAME;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, [text]);

    /**
     * Clears the text
     */
    const handleClear = useCallback(() => {
        setText("");
    }, []);

    /**
     * Applies a conversion function to the text
     * 
     * @param conversionFn - Function to apply to the text
     */
    const applyConversion = useCallback((conversionFn: (t: string) => string) => {
        if (!text) return;
        setText((prev) => conversionFn(prev));
    }, [text]);

    return {
        text,
        setText,
        stats,
        copied,
        handleCopy,
        handleDownload,
        handleClear,
        applyConversion,
    };
}
