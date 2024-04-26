import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTableComponent } from './pet-table.component';

describe('PetTableComponent', () => {
  let component: PetTableComponent;
  let fixture: ComponentFixture<PetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
