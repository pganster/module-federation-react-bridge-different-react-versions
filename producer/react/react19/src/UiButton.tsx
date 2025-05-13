import React from 'react';
import styles from './UiButton.module.scss';

interface Props {
  logMessage: string;
}

export function UiButton({logMessage}: Props) {
  const onClick = () => {
    console.log('React 19 Producer UI Button Clicked with logMessage', logMessage)
  };

  return <button
    onClick={onClick}
    className={styles.uiButton}>
    Button from Producer React {React.version}
  </button>;
}
