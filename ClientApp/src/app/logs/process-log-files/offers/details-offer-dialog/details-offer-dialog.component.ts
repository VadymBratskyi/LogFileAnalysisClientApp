import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-offer-dialog',
  templateUrl: './details-offer-dialog.component.html',
  styleUrls: ['./details-offer-dialog.component.scss']
})
export class DetailsOfferDialogComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {
		console.log(this.data);
	}

}
