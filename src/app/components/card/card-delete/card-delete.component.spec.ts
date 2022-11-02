import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeleteComponent } from './card-delete.component';

describe('CardDeleteComponent', () => {
  let component: CardDeleteComponent;
  let fixture: ComponentFixture<CardDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
