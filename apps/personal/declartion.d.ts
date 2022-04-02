import { DOMAttributes, AriaAttributes } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    border?: string;
    text?: string;
  }
}
