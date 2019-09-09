import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListComponent } from './part-list.component';
import { FormsModule } from '@angular/forms';
import {BrickService} from './BrickService';
import { HttpClientModule } from '@angular/common/http';

describe('PartListComponent', () => {
  let component: PartListComponent;
  let fixture: ComponentFixture<PartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ PartListComponent ],
      providers: [BrickService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
