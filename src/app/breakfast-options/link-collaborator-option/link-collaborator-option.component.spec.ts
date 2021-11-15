import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCollaboratorOptionComponent } from './link-collaborator-option.component';

describe('LinkCollaboratorOptionComponent', () => {
  let component: LinkCollaboratorOptionComponent;
  let fixture: ComponentFixture<LinkCollaboratorOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkCollaboratorOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkCollaboratorOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
