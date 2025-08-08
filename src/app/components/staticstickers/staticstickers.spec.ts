import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staticstickers } from './staticstickers';

describe('Staticstickers', () => {
  let component: Staticstickers;
  let fixture: ComponentFixture<Staticstickers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Staticstickers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staticstickers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
