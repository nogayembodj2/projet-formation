import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfographePage } from './infographe.page';

describe('InfographePage', () => {
  let component: InfographePage;
  let fixture: ComponentFixture<InfographePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfographePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
