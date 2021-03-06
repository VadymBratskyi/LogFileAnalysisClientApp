import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInfoDialogComponent } from './upload-info-dialog.component';

describe('UploadInfoDialogComponent', () => {
  let component: UploadInfoDialogComponent;
  let fixture: ComponentFixture<UploadInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
