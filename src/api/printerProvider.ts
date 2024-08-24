import { TodoEvent } from "./events";

export class TodoPrinterProvider {
  onGetPrintersRequested: chrome.printerProvider.PrinterRequestedEvent = new TodoEvent();
  onGetUsbPrinterInfoRequested: chrome.printerProvider.PrinterInfoRequestedEvent = new TodoEvent();
  onGetCapabilityRequested: chrome.printerProvider.CapabilityRequestedEvent = new TodoEvent();
  onPrintRequested: chrome.printerProvider.PrintRequestedEvent = new TodoEvent();
}
