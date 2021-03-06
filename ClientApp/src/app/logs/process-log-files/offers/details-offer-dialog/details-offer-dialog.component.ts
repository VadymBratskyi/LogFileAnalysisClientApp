import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfferNotify } from '@log_models';
@Component({
	selector: 'app-details-offer-dialog',
	templateUrl: './details-offer-dialog.component.html',
	styleUrls: ['./details-offer-dialog.component.scss']
})
export class DetailsOfferDialogComponent {

	errorPanelOpenState = false;
	answersPanelOpenState = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: OfferNotify) {}

	get errorMessage() {
		return this.data?.errorMessage;
	}

	get answerMessage() {
		return this.data?.answerMessage;
	}

}
