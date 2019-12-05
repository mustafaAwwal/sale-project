import { Routes } from '@angular/router';
import { GeneralSettingsComponent } from './pages/general-settings/general-settings.component';
import { RoleComponent } from './pages/role/role.component';
import { VatComponent } from './pages/vat/vat.component';
import { UserComponent } from './pages/user/user.component';
import { BranchListComponent } from './pages/branch-list/branch-list.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const SettingsRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'generalSettings'
    },
    {
        path: 'generalSettings',
        children: [
            {
                path: '',
                component: GeneralSettingsComponent
            },
            {
                path: 'role',
                component:RoleComponent
            },
            {
                path: 'vat',
                component: VatComponent
            },
            {
                path: 'user',
                component: UserComponent,
            },
            {
                path:'branch',
                component: BranchListComponent
            },
            {
                path: 'userform',
                component: UserFormComponent
            }
        ]
    }
]