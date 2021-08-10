import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-analysis-errors',
  templateUrl: './analysis-errors.component.html',
  styleUrls: ['./analysis-errors.component.scss']
})
export class AnalysisErrorsComponent {

	constructor(
		private translateService: TranslateService
	) {
		translateService.use(environment.defaultLanguage);
	}

}
