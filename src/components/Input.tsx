import { IconButton, Input as MUIInput } from '@mui/material';

import { observer } from 'mobx-react';
import { todoStore } from '../store/store';
import React, { useEffect, useRef } from 'react';

const TodoInputComponent = observer(() => {
  const handleAddTodo = () => {
    if (todoStore.newTodo.trim()) {
      todoStore.addTodo(todoStore.newTodo);
      todoStore.newTodo = '';
    }
  };
  const counterRender = useRef(0);

  useEffect(() => {
    counterRender.current += 1;
    console.log('TodoInputComponent rendered:', counterRender.current);
  });

  return (
    <div>
      <MUIInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          todoStore.setNewTodo(e.target.value)
        }
        placeholder='Add todo'
        value={todoStore.newTodo}
      />
      <IconButton onClick={handleAddTodo}>➕</IconButton>
    </div>
  );
});

export default TodoInputComponent;
