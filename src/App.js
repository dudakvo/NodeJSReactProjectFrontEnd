import Container from './components/Container';
import TaskPage from './pages/TaskPage';
import ModalTaskPages from './components/ModalTaskPages/ModalTaskPages';

function App() {
  // const isOpen = Boolean(1);
  return (
    <Container>
      <ModalTaskPages>
        <TaskPage />
      </ModalTaskPages>
    </Container>
  );
}

export default App;
