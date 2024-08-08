import { Task } from '../types';
import {nanoid} from "nanoid";

export const INITIAL_TASKS: Task[] = [
    {
        id: nanoid(),
        title: 'Title 2',
        description: 'Desc 2',
        status: 'Todo',
    },
    {
        id: nanoid(),
        title: 'Title 3',
        description: 'Desc 3',
        status: 'Todo',
    },
    {
        id: nanoid(),
        title: 'Title 4',
        description: 'Desc 4',
        status: 'Todo',
    },
];