export type Status = 'Todo' | 'In Progress' | 'Done';

export type Task = {
    id: string;
    title: string;
    description: string;
    status: Status;
};

export type BoardSections = {
    [name: string]: Task[];
};
