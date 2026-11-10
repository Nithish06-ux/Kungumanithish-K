import { useState, useEffect, useCallback } from 'react';

const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isWaiting) return;

    if (!isDeleting) {
      setText(currentWord.substring(0, text.length + 1));

      if (text === currentWord) {
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      setText(currentWord.substring(0, text.length - 1));

      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [text, wordIndex, isDeleting, isWaiting, words, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return text;
};

export default useTypewriter;
