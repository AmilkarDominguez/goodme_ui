import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCProfilePage } from './tab-c-profile.page';

describe('TabCProfilePage', () => {
  let component: TabCProfilePage;
  let fixture: ComponentFixture<TabCProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
