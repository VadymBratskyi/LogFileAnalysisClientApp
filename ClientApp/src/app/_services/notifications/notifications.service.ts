import { Injectable } from '@angular/core';
import { LogNotify, OfferNotify, ProcessLogNotify, ProcessNotify } from '@log_models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NotificationsService {

	private processedFileNotife = new BehaviorSubject(null);
	private offerNotife = new BehaviorSubject(null);

	public get processedFileNotification(): Observable<ProcessLogNotify> {
		return this.processedFileNotife.asObservable();
	}

	public get offerNotification(): Observable<OfferNotify[]> {
		return this.offerNotife.asObservable();
	}

	public addProcessLogNotify(logNotify: ProcessLogNotify) {
		this.processedFileNotife.next(logNotify);
	}

	public addOfferNotify(offers: OfferNotify[]) {
		this.offerNotife.next(offers);
	}

	public deleProcessLogNotify(fileName: string) {
		const fileNotify = new ProcessLogNotify();
		fileNotify.procesNotify = ProcessNotify.delete;
		fileNotify.processLogNotify = { fileName: fileName } as LogNotify;
		this.processedFileNotife.next(fileNotify);
	}

}
