import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrecho } from './card-trecho';

describe('CardTrecho', () => {
  let component: CardTrecho;
  let fixture: ComponentFixture<CardTrecho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTrecho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTrecho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
