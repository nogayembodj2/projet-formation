import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BureauPage } from './bureau.page';

describe('BureauPage', () => {
  let component: BureauPage;
  let fixture: ComponentFixture<BureauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BureauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
