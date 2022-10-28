import { IconType } from 'react-icons';
import {FC} from 'react';

export enum uniqueIdTab {
    ALL= 'ALL',
    PENDIENTES='PENDIENTES',
    COMPLETADOS='COMPLETADOS'
};

export enum uniqueIdPriority {
    All= 0,
    Public=1,
    Private=2,
    Sources=3
};

export type TypeIdTab = uniqueIdTab.ALL | uniqueIdTab.PENDIENTES | uniqueIdTab.COMPLETADOS;

export type TypePriority = 
    uniqueIdPriority.All | 
    uniqueIdPriority.Public | 
    uniqueIdPriority.Private | 
    uniqueIdPriority.Sources;

export interface ITabItem {
    id: TypeIdTab | TypePriority;
    isActive: boolean;
    Icon?: IconType | FC;
    label: string;
};

export interface IToDo {
    id: string;
    title: string;
    isDone: boolean;
    priority: TypePriority;
};
