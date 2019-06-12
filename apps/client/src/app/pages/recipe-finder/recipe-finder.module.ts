import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeFinderComponent } from './recipe-finder/recipe-finder.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ClipboardModule } from 'ngx-clipboard';
import { PipesModule } from '../../pipes/pipes.module';
import { CoreModule } from '../../core/core.module';
import { ListModule } from '../../modules/list/list.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullpageMessageModule } from '../../modules/fullpage-message/fullpage-message.module';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceGuard } from '../maintenance/maintenance.guard';
import { ItemIconModule } from '../../modules/item-icon/item-icon.module';
import { MarketboardModule } from '../../modules/marketboard/marketboard.module';

const routes: Routes = [
  {
    path: '',
    component: RecipeFinderComponent,
    canActivate: [MaintenanceGuard]
  }
];

@NgModule({
  declarations: [RecipeFinderComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NgZorroAntdModule,
    ClipboardModule,
    PipesModule,
    CoreModule,
    ListModule,
    FlexLayoutModule,
    FullpageMessageModule,

    RouterModule.forChild(routes),
    ItemIconModule,
    MarketboardModule
  ]
})
export class RecipeFinderModule {
}