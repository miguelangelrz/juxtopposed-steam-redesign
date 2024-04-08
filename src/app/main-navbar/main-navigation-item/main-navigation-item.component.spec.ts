import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationItemComponent } from './main-navigation-item.component';

describe('MainNavigationItemComponent', () => {
  let component: MainNavigationItemComponent;
  let fixture: ComponentFixture<MainNavigationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNavigationItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
