import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogQueryBuilderComponent } from './components/log-query-builder/log-query-builder.component';
import { QueryBuilderModule } from 'angular2-query-builder';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
	parse: {
	dateInput: 'LL',
	},
	display: {
	dateInput: 'DD-MM-YYYY',
	monthYearLabel: 'YYYY',
	dateA11yLabel: 'LL',
	monthYearA11yLabel: 'YYYY',
	},
};

@NgModule({
	declarations: [LogQueryBuilderComponent],
	imports: [
		CommonModule,
		FormsModule,
		QueryBuilderModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		MatRadioModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSelectModule,
		MatCheckboxModule,
	],
	providers: [
		{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
	],
	exports: [LogQueryBuilderComponent]
})
export class LogQueryBuilderModule { }
