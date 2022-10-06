import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPromptComponent } from './word-prompt.component';

describe('WordPromptComponent', () => {
  let component: WordPromptComponent;
  let fixture: ComponentFixture<WordPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
