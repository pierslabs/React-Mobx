import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import { todoStore } from '../store/store';
import { observer } from 'mobx-react';
import { useEffect, useRef } from 'react';

const TodoList = observer(() => {
  const counterRender = useRef(0);

  useEffect(() => {
    console.log('TodoList rendered:', counterRender.current);
    todoStore.load('https://jsonplaceholder.typicode.com/todos');
  }, []);

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
            <Typography>{todo.title}</Typography>
            <IconButton
              size='small'
              onClick={() => todoStore.removeTodo(todo.title)}
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
