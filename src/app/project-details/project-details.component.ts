import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/buget.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FeedbackService } from '../services/feedback.service';
import { ProjectUpdateService } from '../services/project-update.service';
import { MoMService } from '../services/mom.service';
import { PDFDocument } from 'pdf-lib';
import { RiskProfileService } from '../services/risk-profile.service';
import { AuditHistoryService } from '../services/history.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  feedbackList: any[] = [];
  updateList: any[] = [];
  momList: any[] = [];
  budgetList:any[]=[];
  profileList:any[]=[];
  historyList:any[]=[];
  pdfBuffer: ArrayBuffer[] = [];
  constructor(private _momService: MoMService, public _budgetService: BudgetService,
    public _riskprofileService: RiskProfileService,
    public _audithistoryService: AuditHistoryService,
    private _projectupdateService: ProjectUpdateService, private router: Router, public _feedbackService: FeedbackService) {
  }

  async generatePDF() {
    try {
      await this.generatePdfforClientfeedback();
      await this.generatePdfforProjectupdate();
      await this.generatePdfforMom();
      await this.generatePdfforBudget();
      await this.generatePdfforRiskProfile();
      await this.generatePdfforAuditHistory();



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

  generatePdfforBudget(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._budgetService.getBudgetList().subscribe((res: any) => {
        this.budgetList= [];
        for (let i = 0; i < res.items.length; i++) {
          if (res.items[i].projectId == this._budgetService.myGlobalVariable) {
            this.budgetList.push(res.items[i]);
          }
        }

        console.log("hi");
        const doc = new jsPDF('p', 'mm', 'a4');
        const budget = [['type', 'durationInMonths', 'budgetedHours']]
        const budgetlistpdf = [];

        for (let i = 0; i < this. budgetList.length; i++) {
          budgetlistpdf.push([this. budgetList[i].type,this.budgetList[i].durationInMonths,this. budgetList[i].budgetedHours])
         }

        (doc as any).autoTable({
          head: budget,
          body: budgetlistpdf
        });

        this.pdfBuffer.push(doc.output('arraybuffer'));
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  generatePdfforRiskProfile(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._riskprofileService.getProfileList().subscribe((res: any) => {
        this.profileList= [];
        for (let i = 0; i < res.items.length; i++) {
          if (res.items[i].projectId == this._riskprofileService.myGlobalVariable) {
            this.profileList.push(res.items[i]);
          }
        }

        console.log("hi");
        const doc = new jsPDF('p', 'mm', 'a4');
        const profile = [['riskType', 'description', 'severity','remediationSteps','status','closureDate']]
        const profilelistpdf = [];

        for (let i = 0; i < this.profileList.length; i++) {
          profilelistpdf.push([this.profileList[i].riskType,this.budgetList[i].description,this. budgetList[i].severity,this. budgetList[i].remediationSteps,this. budgetList[i].status,this. budgetList[i].closureDate])
         }

        (doc as any).autoTable({
          head: profile,
          body: profilelistpdf
        });

        this.pdfBuffer.push(doc.output('arraybuffer'));
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  generatePdfforAuditHistory(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._audithistoryService.getHistoryList().subscribe((res: any) => {
        this.historyList= [];
        for (let i = 0; i < res.items.length; i++) {
          if (res.items[i].projectId == this._audithistoryService.myGlobalVariable) {
            this.historyList.push(res.items[i]);
          }
        }

        console.log("hi");
        const doc = new jsPDF('p', 'mm', 'a4');
        const history = [['dateOfAudit', 'reviewedBy', 'status', 'reviewedSection', 'comments', 'actionItem']]
        const historylistpdf = [];

        for (let i = 0; i < this.historyList.length; i++) {
          historylistpdf.push([this.historyList[i].dateOfAudit,this.historyList[i].reviewedBy,this. historyList[i].status,this. historyList[i].reviewedSection,this.historyList[i].comments,this. historyList[i].actionItem])
         }

        (doc as any).autoTable({
          head: history,
          body:historylistpdf
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
  navigateToAudit() {
    this.router.navigate(['/audithistory']);
  }
}


