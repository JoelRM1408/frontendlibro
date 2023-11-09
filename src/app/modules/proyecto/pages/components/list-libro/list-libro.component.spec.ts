import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLibroComponent } from './list-libro.component';

describe('ListLibroComponent', () => {
  let component: ListLibroComponent;
  let fixture: ComponentFixture<ListLibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLibroComponent]
    });
    fixture = TestBed.createComponent(ListLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
