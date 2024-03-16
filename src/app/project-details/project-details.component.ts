import { Component } from '@angular/core';
import { Router } from '@angular/router';

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FeedbackService } from '../services/feedback.service';
import { ProjectUpdateService } from '../services/project-update.service';
import { MoMService } from '../services/mom.service';
import { PDFDocument } from 'pdf-lib';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  feedbackList: any[] = [];
  updateList: any[] = [];
  momList: any[] = [];
  pdfBuffer: ArrayBuffer[] = [];
  constructor(private _momService: MoMService, private _projectupdateService: ProjectUpdateService, private router: Router, public _feedbackService: FeedbackService) {
  }

  async generatePDF() {
    try {
      await this.generatePdfforClientfeedback();
      await this.generatePdfforProjectupdate();
      await this.generatePdfforMom();

      const mergedPdfBytes = await this.mergePdfs(this.pdfBuffer);
      const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });

      // Create a temporary link element
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(mergedPdfBlob);
      downloadLink.download = 'merged_pdf.pdf'; // Set the file name for download
      downloadLink.click(); // Simulate click to trigger download
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }

  async mergePdfs(pdfArrayBuffers: ArrayBuffer[]): Promise<Uint8Array> {
    const mergedPdf = await PDFDocument.create();
    const actions = pdfArrayBuffers.map(async pdfBuffer => {
      const pdf = await PDFDocument.load(pdfBuffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    });
    await Promise.all(actions);
    const mergedPdfBytes = await mergedPdf.save();
    return mergedPdfBytes;
  }

  generatePdfforClientfeedback(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._feedbackService.getFeedbackList().subscribe((res: any) => {
        this.feedbackList = [];
        for (let i = 0; i < res.items.length; i++) {
          if (res.items[i].projectId == this._feedbackService.myGlobalVariable) {
            this.feedbackList.push(res.items[i]);
          }
        }

        const doc = new jsPDF('p', 'mm', 'a4');
        const feedback = [['feedbacktype', 'datereceived', 'detailedfeedback', 'actiontaken', 'closuredate']];
        const feedbacklistpdf = [];

        for (let i = 0; i < this.feedbackList.length; i++) {
          feedbacklistpdf.push([
            this.feedbackList[i].feedbackType,
            this.feedbackList[i].dateReceived,
            this.feedbackList[i].detailedFeedback,
            this.feedbackList[i].actionTaken,
            this.feedbackList[i].closureDate
          ]);
        }

        (doc as any).autoTable({
          head: feedback,
          body: feedbacklistpdf
        });

        this.pdfBuffer.push(doc.output('arraybuffer'));
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  generatePdfforProjectupdate(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._projectupdateService.getUpdateList().subscribe((res: any) => {
        this.updateList = [];
        for (let i = 0; i < res.items.length; i++) {
          if (res.items[i].projectId == this._projectupdateService.myGlobalVariable) {
            this.updateList.push(res.items[i]);
          }
        }

        console.log("hi");
        const doc = new jsPDF('p', 'mm', 'a4');
        const update = [['date', 'generalUpdates']]
        const updatelistpdf = [];

        for (let i = 0; i < this. updateList.length; i++) {
          updatelistpdf.push([this. updateList[i].date,this. updateList[i].generalUpdates])
         }

        (doc as any).autoTable({
          head: update,
          body: updatelistpdf
        });

        this.pdfBuffer.push(doc.output('arraybuffer'));
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

 
  generatePdfforMom(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._momService.getMoMList().subscribe((res: any) => {
        this.momList= [];
        for (let i = 0; i < res.items.length; i++) {
          if (res.items[i].projectId == this._momService.myGlobalVariable) {
            this.momList.push(res.items[i]);
          }
        }

        console.log("hi");
        const doc = new jsPDF('p', 'mm', 'a4');
        const mom = [['meetingDate', 'duration','moMLink','comments']]
        const momlistpdf = [];

        for (let i = 0; i < this. momList.length; i++) {
         momlistpdf.push([this. momList[i].meetingDate,this. momList[i].duration,this. momList[i].moMLink,this. momList[i].comments])
         }

        (doc as any).autoTable({
          head: mom,
          body: momlistpdf
        });

        this.pdfBuffer.push(doc.output('arraybuffer'));
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  navigateToteam() {
    this.router.navigate(['/approved-team']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToresource() {
    this.router.navigate(['/resources']);
  }
  navigateToclientfeedback() {
    this.router.navigate(['/clientfeedback']);
  }
  navigateToprojectUpdate() {
    this.router.navigate(['/projectupdate']);
  }
  navigateToMoM() {
    this.router.navigate(['/meetingminutes']);
  }
  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
  navigateTodashboard() {
    this.router.navigate(['/dashboard']);
  }
  navigateTobudget() {
    this.router.navigate(['/projectbudget']);
  }
  navigateTorisk() {
    this.router.navigate(['/riskprofile']);
  }
}
function autoTable() {
  throw new Error('Function not implemented.');
}

