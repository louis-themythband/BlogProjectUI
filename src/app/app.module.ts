import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpErrorInterceptor } from './service/httperrorinterceptor';

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GMapModule } from 'primeng/gmap';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MenubarModule } from 'primeng/menubar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import { DialogService } from 'primeng/dynamicdialog';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './service/AuthGuard';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/pages/login/login.component';
import { BlogViewComponent } from './view/blog-view/blog-view.component';
import { TopMenuComponent } from './view/top-menu/top-menu.component';
import { ViewBlogComponent } from './view/blog-view/view-blog/view-blog.component';
import { PageNotFoundComponent } from './view/pages/page-not-found/page-not-found.component';
import { AdminConsoleComponent } from './view/admin-console/admin-console.component';
import { NewBlogComponent } from './view/admin-console/new-blog/new-blog.component';
import { EditBlogComponent } from './view/admin-console/edit-blog/edit-blog.component';
import { NewUserComponent } from './view/admin-console/new-user/new-user.component';
import { EditUserComponent } from './view/admin-console/edit-user/edit-user.component';
import { AdminViewBlogComponent } from './view/admin-console/admin-view-blog/admin-view-blog.component';
import { UserBlogViewComponent } from './view/user-blog-view/user-blog-view.component';
import { CommentComponent } from './view/blog-view/view-blog/comment/comment.component';
import { CommentsComponent } from './view/blog-view/view-blog/comments/comments.component';
import { AddCommentDialogComponent } from './view/dialogs/add-comment-dialog/add-comment-dialog.component';
import { EditBlogSelectComponent } from './view/admin-console/edit-blog-select/edit-blog-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogViewComponent,
    TopMenuComponent,
    ViewBlogComponent,
    PageNotFoundComponent,
    AdminConsoleComponent,
    NewBlogComponent,
    EditBlogComponent,
    NewUserComponent,
    EditUserComponent,
    AdminViewBlogComponent,
    UserBlogViewComponent,
    CommentComponent,
    CommentsComponent,
    AddCommentDialogComponent,
    EditBlogSelectComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    CommonModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DataViewModule,
    DialogModule,
    DynamicDialogModule,
    DividerModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    FullCalendarModule,
    GMapModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MatPaginatorModule,
    MatTableModule,
    MenubarModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PasswordModule,
    PickListModule,
    RadioButtonModule,
    RatingModule,
    RouterModule,
    ScrollPanelModule,
    SidebarModule,
    SliderModule,
    SelectButtonModule,
    SplitButtonModule,
    SplitterModule,
    TableModule,
    TabViewModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    TriStateCheckboxModule,
    VirtualScrollerModule
  ],
  exports: [RouterModule],
  providers: [
    ConfirmationService,
    DialogService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
