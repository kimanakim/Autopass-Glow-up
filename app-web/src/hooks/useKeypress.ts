import React from 'react';

export function useKeypress(keyToTrigger: string, action?: () => void) {
  const [keyPressed, setKeyPressed] = React.useState(false);

  const keyDownHandler = (e: KeyboardEvent) => {
    const { key } = e;

    if (key === keyToTrigger) {
      setKeyPressed(true);
    }
  };

  const keyUpHandler = (e: KeyboardEvent) => {
    const { key } = e;

    if (key === keyToTrigger) {
      setKeyPressed(false);
      if (typeof action === 'function') {
        action();
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  return keyPressed;
}
