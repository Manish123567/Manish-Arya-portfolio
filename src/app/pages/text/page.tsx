"use client";
import { TextGenerateEffect } from "../../component/ui/textgenerate";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

const TextGenerateEffectDemo=()=> {
  return <TextGenerateEffect words={words} />;
}

export default TextGenerateEffectDemo; 