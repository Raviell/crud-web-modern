import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCrudComponent } from './cards-crud.component';

describe('CardsCrudComponent', () => {
  let component: CardsCrudComponent;
  let fixture: ComponentFixture<CardsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
