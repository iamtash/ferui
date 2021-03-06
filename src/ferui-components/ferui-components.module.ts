import { NgModule } from '@angular/core';
import { ClrIconModule } from './icon/icon.module';
import { FuiFormsModule } from './forms/forms.module';
import { FuiDatagridModule } from './datagrid/datagrid.module';
import { FuiUnselectableModule } from './unselectable/unselectable.module';
import { FuiVirtualScrollerModule } from './virtual-scroller/virtual-scroller.module';
import { FuiTabsModule } from './tabs/tabs.module';
import { FuiDropdownModule } from './dropdown/dropdown.module';
import { TreeViewModule } from './tree-view/tree-view.module';
import { FuiWidgetModule } from './widget/widget.module';
import { FuiModalsModule } from './modals/modals.module';
import { FuiAlertsModule } from './alerts/alerts.module';
import { FuiToastNotificationModule } from './toast-notification/toast-notification.module';

@NgModule({
  exports: [
    ClrIconModule,
    FuiTabsModule,
    FuiFormsModule,
    FuiDatagridModule,
    FuiUnselectableModule,
    FuiVirtualScrollerModule,
    FuiDropdownModule,
    TreeViewModule,
    FuiWidgetModule,
    FuiAlertsModule,
    FuiModalsModule,
    FuiToastNotificationModule
  ]
})
export class FeruiModule {}
