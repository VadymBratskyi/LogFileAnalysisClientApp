import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterLayoutComponent } from './footer/footer-layout.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MissingTranslationService } from 'app/translation/missing-translation-service';
import { HttpLoaderFactory } from 'app/translation/http-loader-factory';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutComponent,
    FooterLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
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
    MatToolbarModule,
    MatSidenavModule,
    MatBadgeModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ]
})
export class LayoutModule { }
