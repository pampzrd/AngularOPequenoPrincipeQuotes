import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgart } from './bgart';

describe('Bgart', () => {
  let component: Bgart;
  let fixture: ComponentFixture<Bgart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bgart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
