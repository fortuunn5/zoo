import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateHotelComponent } from './create-or-update-hotel.component';

describe('CreateOrUpdateHotelComponent', () => {
  let component: CreateOrUpdateHotelComponent;
  let fixture: ComponentFixture<CreateOrUpdateHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrUpdateHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrUpdateHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
