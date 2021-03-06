import { Component, OnInit } from '@angular/core';
import { LogNotify, ProcessLogNotify, ProcessNotify } from '@log_models';
import { NotificationsService, ProcessLogFilesService } from '@log_services';
import { ReplaySubject,  } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-processing-log',
	templateUrl: './processing-log.component.html',
	styleUrls: ['./processing-log.component.scss']
})
export class ProcessingLogComponent implements OnInit {

	private destroyed$: ReplaySubject<boolean> = new ReplaySubject();	
	public complatedFiles: LogNotify[] = [];
	public isProcessCardExpanded: boolean;

	constructor(
		public servNotifications: NotificationsService,
		public servProcessLogFiles: ProcessLogFilesService
	) { }
	ngOnInit(): void {
		this.servNotifications.processedFileNotification
			.pipe(takeUntil(this.destroyed$))
			.subscribe((logNotify: ProcessLogNotify) => {
				switch(logNotify.procesNotify) {
					case ProcessNotify.add:
						const isNotExist = this.complatedFiles.findIndex(item => item.fileName === logNotify.processLogNotify.fileName);
						if(isNotExist < 0) {
							this.complatedFiles.push(logNotify.processLogNotify);
						}
						break;
					case ProcessNotify.delete:
						const isExistIndex = this.complatedFiles.findIndex(item => item.fileName === logNotify.processLogNotify.fileName);
						if(isExistIndex >= 0) {
							this.complatedFiles.splice(isExistIndex, 1);
						}
						break;
				}
			});
	}

	ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

}
