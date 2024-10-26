import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import { todoStore } from '../store/store';
import { observer } from 'mobx-react';
import { useEffect, useRef } from 'react';

const TodoList = observer(() => {
  const counterRender = useRef(0);

  useEffect(() => {
    counterRender.current += 1;
    console.log('TodoList rendered:', counterRender.current);
  });

  return (
    <List component='nav' sx={{ width: 320 }}>
      {todoStore.todos.map((todo) => (
        <ListItem key={todo.id}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography>{todo.task}</Typography>
            <IconButton
              size='small'
              onClick={() => todoStore.removeTodo(todo.task)}
            >
              🗑️
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
});

export default TodoList;
