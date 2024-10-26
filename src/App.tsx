import { Box, Container, Stack } from '@mui/material';
import { observer } from 'mobx-react';
import TodoList from './components/TodoList';
import TodoInputComponent from './components/Input';
import { useEffect } from 'react';

function ListObserve() {
  useEffect(() => {
    console.log('ListObserve rendered');
  });

  return (
    <Container>
      <h1>Todo app</h1>
      <Stack direction='row' spacing={2} sx={styles}>
        <Box>
          <TodoInputComponent />
        </Box>
        <Box>
          <TodoList />
        </Box>
      </Stack>
    </Container>
  );
}

const ObservedListObserve = observer(ListObserve);
export default ObservedListObserve;

const styles = {
  justifyContent: 'space-around',
  alignItems: 'start',
  width: '100%',
  padding: 2,
  border: '1px solid #ccc',
  minHeight: '80vh',
};
