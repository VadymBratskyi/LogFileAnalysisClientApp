import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-info-dialog',
  templateUrl: './upload-info-dialog.component.html',
  styleUrls: ['./upload-info-dialog.component.scss']
})
export class UploadInfoDialogComponent {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any) {}

	get errorMessage() {
		return this.data?.errorMessage;
	}


}
