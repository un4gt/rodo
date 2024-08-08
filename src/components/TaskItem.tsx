import {Card, CardContent, useTheme} from '@mui/material';
import { Task } from '../types';

type TaskItemProps = {
    task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
    const theme = useTheme();
    return (
        <Card sx={{
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[1],
            marginBottom: theme.spacing(1),
            color: theme.palette.text.primary,
        }}>
            <CardContent>{task.title}</CardContent>
        </Card>
    );
};

export default TaskItem;
