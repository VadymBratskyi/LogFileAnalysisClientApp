import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardHome } from '@log_models';
import { ProcessLogFilesService } from '@log_services';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'environments/environment';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

	private destroyed$: ReplaySubject<boolean> = new ReplaySubject();

	homeCards: CardHome[];

	constructor(
		private router: Router,
		private translateService: TranslateService,
		private servProcessLogFiole: ProcessLogFilesService
	) {
		translateService.use(environment.defaultLanguage);
	 }

	ngOnInit() {
		this.homeCards = [
		this.CreateProcessLogFileCard(),
		this.CreateViewLogObjectsCard(),
		this.CreateAnalysisLogObjectsCard()
		];
	}

	ngOnDestroy() {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public onProcessLogFile(card: CardHome) {
		this.servProcessLogFiole.CreateProcessLogSession()
		.pipe(takeUntil(this.destroyed$))
		.subscribe(sessionId => {
			this.router.navigate([card.routerLink, sessionId]);
		});
	}

	public onShowLogObjects(card: CardHome) {
		this.router.navigate([card.routerLink]);
	}

	public onAnlysisLogObjects(card: CardHome) {
		this.router.navigate([card.routerLink]);
	}

	private CreateProcessLogFileCard(): CardHome {
		const card = new CardHome();
		this.translateService.get([
			"HomePage.ProcessLogFileCard.Title",
			"HomePage.ProcessLogFileCard.ContentParagraph",
		])
		.pipe(takeUntil(this.destroyed$))
		.subscribe(translations  => {
			card.title = translations["HomePage.ProcessLogFileCard.Title"];
			card.contentImage = 'assets/images/log_analysis.png';
			card.contentParagraph = translations["HomePage.ProcessLogFileCard.ContentParagraph"];
			card.routerLink = '/process-log-files';
		});
		return card;
	}

	private CreateViewLogObjectsCard(): CardHome {
		const card = new CardHome();
		this.translateService.get([
			"HomePage.ViewLogObjectsCard.Title",
			"HomePage.ViewLogObjectsCard.ContentParagraph",
		])
		.pipe(takeUntil(this.destroyed$))
		.subscribe(translations  => {
			card.title = translations["HomePage.ViewLogObjectsCard.Title"];
			card.contentImage = 'assets/images/query_builder.png';
			card.contentParagraph = translations["HomePage.ViewLogObjectsCard.ContentParagraph"];
			card.routerLink = '/show-log-objects';
		});
		return card;
	}

	private CreateAnalysisLogObjectsCard(): CardHome {
		const card = new CardHome();
		this.translateService.get([
			"HomePage.ErrorAnalysisCard.Title",
			"HomePage.ErrorAnalysisCard.ContentParagraph",
		])
		.pipe(takeUntil(this.destroyed$))
		.subscribe(translations  => {
			card.title = translations["HomePage.ErrorAnalysisCard.Title"];
			card.contentImage = 'assets/images/study_system.png';
			card.contentParagraph = translations["HomePage.ErrorAnalysisCard.ContentParagraph"];
			card.routerLink = '/analysis-errors';
		});		
		return card;
	}

}
