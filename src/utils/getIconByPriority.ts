import { GiAlienEgg, GiDevilMask, GiEvilBat, GiAnubis } from "react-icons/gi";
import { TypePriority } from '../descriptor/types';

export const getIconByPriority=(priority: TypePriority)=>{
    const priorityIcon={
        0: GiAlienEgg,
        1: GiDevilMask,
        2: GiEvilBat,
        3: GiAnubis
    };
    return priorityIcon[priority];
};

// GiCrossMark