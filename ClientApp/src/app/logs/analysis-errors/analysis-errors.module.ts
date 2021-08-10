import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisErrorRoutingModule } from './analysis-errors-routing.module';
import { AnalysisErrorsComponent } from './analysis-errors.component';
import { AnalysisMenuComponent } from './analysis-menu/analysis-menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MissingTranslationService } from 'app/translation/missing-translation-service';
import { HttpLoaderFactory } from 'app/translation/http-loader-factory';
import { HttpClient } from '@angular/common/http';


@NgModule({
	declarations: [AnalysisErrorsComponent, AnalysisMenuComponent],
	imports: [
		CommonModule,
		AnalysisErrorRoutingModule,
		TranslateModule.forRoot({
		missingTranslationHandler: {
			provide: MissingTranslationHandler,
			useClass: MissingTranslationService
		},
		loader: {
			provide: TranslateLoader,
			useFactory: HttpLoaderFactory,
			deps: [HttpClient]
		}
	}),

    /**material */
		MatCardModule,
		MatTabsModule
	]
})
export class AnalysisErrorsModule { }
