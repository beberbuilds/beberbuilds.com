"use client";
import { useState, useEffect, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export function useTextScramble(finalText: string, trigger: boolean, delay = 0) {
  const [output, setOutput] = useState(finalText);

  const scramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = finalText.length * 3;
    const interval = setInterval(() => {
      setOutput(
        finalText
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration / 3) return finalText[idx];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration++;
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setOutput(finalText);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [finalText]);

  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(scramble, delay * 1000);
    return () => clearTimeout(t);
  }, [trigger, scramble, delay]);

  return output;
}
