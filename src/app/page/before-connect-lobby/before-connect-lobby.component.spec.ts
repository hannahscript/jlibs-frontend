import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeConnectLobbyComponent } from './before-connect-lobby.component';

describe('BeforeConnectLobbyComponent', () => {
  let component: BeforeConnectLobbyComponent;
  let fixture: ComponentFixture<BeforeConnectLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeConnectLobbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforeConnectLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
