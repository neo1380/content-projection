/**
 * Created by vadimdez on 01/11/2016.
 */
import { NgModule } from '@angular/core';

import { IPdfViewerComponent } from './ipdfviewer.component';
import { PDFJSStatic } from './pdf-dist';

declare global {
  const PDFJS: PDFJSStatic;
}

export {
  PDFJSStatic,
  PDFDocumentProxy,
  PDFViewerParams,
  PDFPageProxy,
  PDFSource,
  PDFProgressData,
  PDFPromise
} from './pdf-dist';

@NgModule({
  declarations: [IPdfViewerComponent],
  exports: [IPdfViewerComponent]
})
export class IPdfViewerModule {}
