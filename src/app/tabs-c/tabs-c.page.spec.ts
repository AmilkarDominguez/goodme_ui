import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsCPage } from './tabs-c.page';

describe('TabsCPage', () => {
  let component: TabsCPage;
  let fixture: ComponentFixture<TabsCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
