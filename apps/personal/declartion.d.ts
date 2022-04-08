import { DOMAttributes, AriaAttributes } from 'react';

declare global {
  interface Window {
    gtag: any;
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    border?: string;
    text?: string;
  }
}
