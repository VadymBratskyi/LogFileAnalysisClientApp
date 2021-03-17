import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LogTableState, OfferNotify } from '@log_models';
import { NotificationsService, ProcessLogFilesService } from '@log_services';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DetailsOfferDialogComponent } from './details-offer-dialog/details-offer-dialog.component';

@Component({
	selector: 'app-offers',
	templateUrl: './offers.component.html',
	styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit, OnDestroy, AfterViewInit {

	private destroyed$: ReplaySubject<boolean> = new ReplaySubject();

	private offersData: OfferNotify[] = [];
	public isProcessCardExpanded: boolean;
	public displayTableColumns = ['statusCode', 'errorMessage', 'answerMessage', 'actions' ];
	public pageSizeOptions = [10, 25, 50, 100];

	@ViewChild(MatPaginator) paginator: MatPaginator;
	public dataSource = new MatTableDataSource<OfferNotify>(this.offersData);

	public get offersLength(): number {
		return this.offersData.length;
	}

	constructor(
		public dialog: MatDialog,
		public servNotifications: NotificationsService,
		public servProcessLogFiles: ProcessLogFilesService
	) { }

	ngOnInit(): void {
		this.servNotifications.offerNotification
			.pipe(takeUntil(this.destroyed$))
			.subscribe(offers => {
				if (offers) {
					offers.forEach(item => {
						const isExist = this.offersData.findIndex(offer => offer.errorMessage == item.errorMessage);
						if (isExist < 0) {
							this.offersData.push(item);
						}
					});
				}
			});
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	public onShowDetailsOffer(offer: OfferNotify) {
		this.dialog.open(DetailsOfferDialogComponent, {
			data:  offer
		});
	}

	ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

}
