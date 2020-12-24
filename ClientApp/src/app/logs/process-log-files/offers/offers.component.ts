import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogTableState, Offer } from '@log_models';
import { NotificationsService, ProcessLogFilesService } from '@log_services';
import { DetailsOfferDialogComponent } from './details-offer-dialog/details-offer-dialog.component';

@Component({
	selector: 'app-offers',
	templateUrl: './offers.component.html',
	styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
	public displayTableColumns = ['statusCode', 'errorMessage', 'answerMessage', 'actions' ];
	public pageSizeOptions = [10, 25, 50, 100];
	public resultsLength = 0;
	public logTableState = {
		skip: 0,
		take: 10
	} as LogTableState;

	public isProcessCardExpanded: boolean;

	public get offerMessages(): Offer[] {
		return this.servNotifications?.offerNotification?.offerMessages;
	}
	constructor(
		public dialog: MatDialog,
		public servNotifications: NotificationsService,
		public servProcessLogFiles: ProcessLogFilesService
	) { }

	public pageChanges(state: LogTableState) {
		console.log(state)
	}

	public onShowDetailsOffer(offer: Offer) {
		this.dialog.open(DetailsOfferDialogComponent, {
			data:  offer
		});
	}

}
