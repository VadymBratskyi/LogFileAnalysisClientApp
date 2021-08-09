import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcessLogFilesRoutingModule } from './process-log-files-routing.module';
import { ProcessLogFilesComponent } from './process-log-files.component';
import { UploaderFilesComponent } from './uploader-files/uploader-files.component';
import { UploadModule } from '@progress/kendo-angular-upload';
import { ProcessingLogComponent } from './processing/processing-log.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OffersComponent } from './offers/offers.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailsOfferDialogComponent } from './offers/details-offer-dialog/details-offer-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UploadInfoDialogComponent } from './uploader-files/upload-info-dialog/upload-info-dialog.component';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MissingTranslationService } from 'app/translation/missing-translation-service';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'app/translation/http-loader-factory';

@NgModule({
	declarations: [
		ProcessLogFilesComponent,
		UploaderFilesComponent,
		ProcessingLogComponent, OffersComponent, DetailsOfferDialogComponent, UploadInfoDialogComponent
	],
	imports: [
		CommonModule,
		ProcessLogFilesRoutingModule,
		FormsModule,
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
		MatButtonModule,
		MatDialogModule,
		MatBadgeModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatTableModule,
		MatInputModule,
		MatFormFieldModule,
		MatExpansionModule,
		MatPaginatorModule,

		/**progress */
		UploadModule
	]
})
export class ProcessLogFilesModule { }
