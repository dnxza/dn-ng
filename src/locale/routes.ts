import { environment } from '../environments/environment';

import { PageNotFoundComponent } from '../app/pages/page-not-found/page-not-found.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { AboutComponent } from '../app/pages/about/about.component';

export const en = [
    { path: 'home', component: HomeComponent, data: {title: 'Home'} },
    { path: 'about', component: AboutComponent, data: {title: 'About'} },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent, data: {title: 'Page Not Found'} }
];

export const th = [
    { path: 'home', component: HomeComponent, data: {title: 'หน้าแรก'} },
    { path: 'about', component: AboutComponent, data: {title: 'เกี่ยวกับ'} },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent, data: {title: 'ไม่พบหน้า'} }
];

export const routes = {
    'en': en,
    'th': th
};

export function getRoute() {
    return routes[environment.lang];
}
