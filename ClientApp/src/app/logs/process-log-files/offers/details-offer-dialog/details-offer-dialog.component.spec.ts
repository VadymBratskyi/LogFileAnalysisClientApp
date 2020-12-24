import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfferDialogComponent } from './details-offer-dialog.component';

describe('DetailsOfferDialogComponent', () => {
  let component: DetailsOfferDialogComponent;
  let fixture: ComponentFixture<DetailsOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfferDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
