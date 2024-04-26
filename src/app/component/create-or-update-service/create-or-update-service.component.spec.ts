import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateServiceComponent } from './create-or-update-service.component';

describe('CreateOrUpdateServiceComponent', () => {
  let component: CreateOrUpdateServiceComponent;
  let fixture: ComponentFixture<CreateOrUpdateServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrUpdateServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrUpdateServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
