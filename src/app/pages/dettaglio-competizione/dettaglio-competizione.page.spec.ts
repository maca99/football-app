import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettaglioCompetizionePage } from './dettaglio-competizione.page';

describe('DettaglioCompetizionePage', () => {
  let component: DettaglioCompetizionePage;
  let fixture: ComponentFixture<DettaglioCompetizionePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioCompetizionePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettaglioCompetizionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
