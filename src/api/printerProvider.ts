import { TodoEvent } from "./events";

type Interface = typeof chrome.printerProvider;

export class TodoPrinterProvider implements Interface {
  onGetPrintersRequested: chrome.printerProvider.PrinterRequestedEvent = new TodoEvent();
  onGetUsbPrinterInfoRequested: chrome.printerProvider.PrinterInfoRequestedEvent = new TodoEvent();
  onGetCapabilityRequested: chrome.printerProvider.CapabilityRequestedEvent = new TodoEvent();
  onPrintRequested: chrome.printerProvider.PrintRequestedEvent = new TodoEvent();
}
