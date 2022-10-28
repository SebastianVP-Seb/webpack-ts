import { ITabItem, uniqueIdPriority } from './types';
import { FcBiohazard, FcMusic, FcLike, FcNightLandscape } from "react-icons/fc";

export const itemsPriority: Array<ITabItem> = [
    {
        id: uniqueIdPriority.All,
        isActive: true,
        label: 'Todas',
        Icon: FcBiohazard
    },
    {
        id: uniqueIdPriority.Public,
        isActive: false,
        label: 'Baja',
        Icon: FcMusic
    },
    {
        id: uniqueIdPriority.Private,
        isActive: false,
        label: 'Media',
        Icon: FcLike
    },
    {
        id: uniqueIdPriority.Sources,
        isActive: false,
        label: 'Alta',
        Icon: FcNightLandscape
    }
];
