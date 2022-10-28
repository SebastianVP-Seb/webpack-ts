import { ITabItem, uniqueIdTab } from './types';
import {IconType} from 'react-icons';
import { ImFire, ImAppleinc, ImPacman } from "react-icons/im";

export const tabsItem: Array<ITabItem> = [
    {
        id: uniqueIdTab.ALL,
        isActive: true,
        label: 'Todas',
        Icon: ImFire
    },
    {
        id: uniqueIdTab.PENDIENTES,
        isActive: false,
        label: 'Pendientes',
        Icon: ImPacman
    },
    {
        id: uniqueIdTab.COMPLETADOS,
        isActive: false,
        label: 'Completadas',
        Icon: ImAppleinc
    }
];