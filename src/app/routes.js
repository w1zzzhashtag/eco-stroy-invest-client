import { Main, Menu, SendApplication, Works, WorksDetails, Services, RenovationProcess } from '../pages';

export const BASE_ROUTE = '/';
export const MENU_ROUTE = '/menu';
export const SEND_APPLICATION_ROUTE = '/send-application';
export const WORKS_ROUTE = '/works';
export const WORKS_DETAILS_ROUTE = '/works/:id';
export const SERVICES_ROUTE = '/services';
export const RENOVATION_PROCESS_ROUTE = '/renovation-process';

// свойство title используется для хлебных крошек
export const ROUTES = [
    {
        path: BASE_ROUTE,
        exact: true,
        component: Main,
        title: 'Главная',
    },
    {
        path: MENU_ROUTE,
        exact: true,
        component: Menu,
    },
    {
        path: WORKS_ROUTE,
        component: Works,
        exact: true,
        title: 'Наши работы',
    },
    {
        path: WORKS_DETAILS_ROUTE,
        component: WorksDetails,
    },
    {
        path: SEND_APPLICATION_ROUTE,
        component: SendApplication,
        title: 'Оставить заявку',
    },
    {
        path: SERVICES_ROUTE,
        component: Services,
        title: 'Предоставляемые услуги',
    },
    {
        path: RENOVATION_PROCESS_ROUTE,
        component: RenovationProcess,
        title: 'Процесс ремонта',
    },
];
