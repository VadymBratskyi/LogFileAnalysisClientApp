import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { NotificationsService, ProcessLogFilesService } from '@log_services';
import { LogNotify, ProcessState, FileProcess, OfferNotify, ProcessLogNotify, ProcessNotify } from '@log_models';

@Component({
	selector: 'app-process-log-files',
	templateUrl: './process-log-files.component.html',
	styleUrls: ['./process-log-files.component.scss'],
	providers: [NotificationsService]
})
export class ProcessLogFilesComponent implements OnInit, OnDestroy {

	private destroyed$: ReplaySubject<boolean> = new ReplaySubject();

	successUploaded: boolean;
	sessionId: string;
	isComplatedProcessFile: boolean;
	isExistOffers: boolean;

	constructor(
		public servProcessLogFiles: ProcessLogFilesService,
		public servNotifications: NotificationsService,
		private activatedRoute: ActivatedRoute
	) { }

	private _progressAnalisysFiles() {
		this.servProcessLogFiles.onProcessNotification
		.pipe(takeUntil(this.destroyed$))
		.subscribe((logNotify: LogNotify) => {
			if(logNotify) {
				this._complateProcesFile(logNotify.fileName);
				const processLogNotify = new ProcessLogNotify();
				processLogNotify.procesNotify = ProcessNotify.add;
				processLogNotify.processLogNotify = logNotify;
				this.servNotifications.addProcessLogNotify(processLogNotify);
			}
		});
	}

	private _processOfferIssues() {
		this.servProcessLogFiles.onOfferNotification
		.pipe(takeUntil(this.destroyed$))
		.subscribe((offers: OfferNotify[]) => {
			if(offers.length > 0) {
				this.isExistOffers = true;
				this.servNotifications.addOfferNotify(offers);
			}
		}); 
	}

	private _complateProcesFile(fileName: string) {
		this.isComplatedProcessFile = true;
		let file = this.servProcessLogFiles.processingFiles.find(pr => pr.uploadedFile.name == fileName) as FileProcess;
		file.processState = ProcessState.complate;
	}
	
	public ngOnInit() {
		this.activatedRoute.paramMap
		.pipe(takeUntil(this.destroyed$))
		.subscribe(p => {
		this.sessionId = p.get("sessionId");
		this.servProcessLogFiles.startHubConnection();
		});
		this._progressAnalisysFiles();
		this._processOfferIssues();
	}
	public ngOnDestroy() {
		this.destroyed$.next(true);
		this.destroyed$.complete();
		this.servProcessLogFiles.stopHubConnection();
	}

}
