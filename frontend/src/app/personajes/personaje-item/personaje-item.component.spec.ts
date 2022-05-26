import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeItemComponent } from './personaje-item.component';

describe('PersonajeItemComponent', () => {
  let component: PersonajeItemComponent;
  let fixture: ComponentFixture<PersonajeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
