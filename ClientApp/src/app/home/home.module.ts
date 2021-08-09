import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardHomeComponent } from './card/card-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MissingTranslationService } from 'app/translation/missing-translation-service';
import { HttpLoaderFactory } from 'app/translation/http-loader-factory';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    CardHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule { }
