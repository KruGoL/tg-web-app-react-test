/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
interface Telegram {
    WebApp: {
      initData: string;
      initDataUnsafe: any;
      version: string;
      platform: string;
      colorScheme: string;
      themeParams: {
        backgroundColor: string;
        textColor: string;
        hintColor: string;
        linkColor: string;
        buttonColor: string;
        buttonTextColor: string;
        secondaryBackgroundColor: string;
      };
      isExpanded: boolean;
      viewportHeight: number;
      viewportStableHeight: number;
      headerColor: string;
      backgroundColor: string;
      isClosingConfirmationEnabled: boolean;
      setHeaderColor(color: string): void;
      setBackgroundColor(color: string): void;
      enableClosingConfirmation(): void;
      disableClosingConfirmation(): void;
      close(): void;
      onEvent(eventType: string, callback: Function): void;
      offEvent(eventType: string, callback: Function): void;
      sendData(data: string): void;
      ready(): void;
    };
  }
  
  // Declare the global variable "Telegram"
  declare var Telegram: Telegram;
  