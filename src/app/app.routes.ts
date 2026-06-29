import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout-component/layout-component';
import { Dashboard } from './pages/dashboard/dashboard';
import { CalendarComponent } from './pages/calendar-component/calendar-component';
import { TaskComponent } from './pages/task-component/task-component';
import { GoalsComponent } from './pages/goals-component/goals-component';
import { MeetingsComponent } from './pages/meetings-component/meetings-component';
import { RemindersComponent } from './pages/reminders-component/reminders-component';
import { NotesComponent } from './pages/notes-component/notes-component';
import { AnalyticsComponent } from './pages/analytics-component/analytics-component';
import { AiAssistantComponent } from './pages/ai-assistant-component/ai-assistant-component';
import { SettingsComponent } from './pages/settings-component/settings-component';
import { ProfileComponent } from './pages/profile-component/profile-component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:Dashboard,
                title:'Dashboard'
            },
            {
                path:'calendar',
                component:CalendarComponent
            },
            {
                path:'task',
                component:TaskComponent
            },
            {
                path:'goals',
                component:GoalsComponent
            },
            {
                path:'meeting',
                component:MeetingsComponent
            },
            {
                path:'reminders',
                component:RemindersComponent
            },
            {
                path:'notes',
                component:NotesComponent
            },
            {
                path:'analytics',
                component:AnalyticsComponent
            },
            {
                path:'ai',
                component:AiAssistantComponent
            },
            {
                path:'settings',
                component:SettingsComponent
            },
            {
                path:'profile',
                component:ProfileComponent
            },


        ]
    },
    
];
