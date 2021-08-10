import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorLogObjectsService } from '@log_services';
import { TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-analysis-menu',
	templateUrl: './analysis-menu.component.html',
	styleUrls: ['./analysis-menu.component.scss']
})
	export class AnalysisMenuComponent implements OnInit, OnDestroy {

	private destroyed$: ReplaySubject<boolean> = new ReplaySubject();

	public links = [];

	constructor(
		private translateService: TranslateService,
		public errorLogObjectsService: ErrorLogObjectsService
	) {}


	ngOnInit() {
		this.translateService.get([
			"AnalysisErorPage.NavPanel.UnknownpanelTitle",
			"AnalysisErorPage.NavPanel.KnownPanelTitle",
		]).pipe(takeUntil(this.destroyed$))
		.subscribe(translate => {			
			this.links = [
				{
					link: 'unknown-error',
					title: translate['AnalysisErorPage.NavPanel.UnknownpanelTitle']
				},
				{
					link: 'known-error',
					title: translate['AnalysisErorPage.NavPanel.KnownPanelTitle']
				}
			]
		});
	}

	ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

}
