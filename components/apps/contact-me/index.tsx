'use client';

import { useState } from 'react';
import styles from './contact-me.module.css';

export function ContactMe() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, subject, message }),
    });

    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <span>Send a Message to Me</span>
        <button>Send</button>
      </div>

      {/* Editor body */}
      <div className={styles.editor}>
        <div className={styles.line}>
          <span className={styles.lineNumber}>1</span>
          <input
            type="text"
            placeholder="Your Email / Name :"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.line}>
          <span className={styles.lineNumber}>2</span>
          <input
            type="text"
            placeholder="subject (may be a feedback for this website!)"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className={styles.line}>
          <span className={styles.lineNumber}>3</span>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
