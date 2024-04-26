import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdatePetComponent } from './create-or-update-pet.component';

describe('CreateOrUpdatePetComponent', () => {
  let component: CreateOrUpdatePetComponent;
  let fixture: ComponentFixture<CreateOrUpdatePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrUpdatePetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrUpdatePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
