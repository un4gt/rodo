import Box from '@mui/material/Box';
import { useDroppable } from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import Typography from '@mui/material/Typography';
import { Task } from '../types';
import TaskItem from './TaskItem';
import SortableTaskItem from './SortableTaskItem';
import {useTheme} from "@mui/material";

type BoardSectionProps = {
    id: string;
    title: string;
    tasks: Task[];
};

const BoardSection = ({ id, title, tasks }: BoardSectionProps) => {
    const { setNodeRef } = useDroppable({
        id,
    });
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                padding: theme.spacing(2),
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[1],
            }}
        >
            <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: theme.spacing(2)}}>
                {title}
            </Typography>
            <SortableContext
                id={id}
                items={tasks}
                strategy={verticalListSortingStrategy}
            >
                <div ref={setNodeRef}>
                    {tasks.map((task) => (
                        <Box key={task.id} sx={{ mb: 2 }}>
                            <SortableTaskItem id={task.id}>
                                <TaskItem task={task} />
                            </SortableTaskItem>
                        </Box>
                    ))}
                </div>
            </SortableContext>
        </Box>
    );
};

export default BoardSection;
