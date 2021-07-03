import SectionView from '../../components/SectionView';
import Container from '../../components/Container';
import SprintSidebar from '../../components/SprintSidebar';
import SprintTaskList from '../../components/SprintTaskList';
import SprintHeader from '../../components/SprintHeader';
import GraphicBtn from '../../components/GraphicBtn';
import s from './SprintView.module.css';

const SprintView = props => {
  return (
    <SectionView>
      <Container>
        <div className={s.sprint_conteiner}>
          <div className={s.sprint_main_section}>
            <SprintSidebar {...props} />
          </div>
          <div className={s.conteiner}>
            <SprintHeader />
            <SprintTaskList />
            <GraphicBtn />
          </div>
        </div>
      </Container>
    </SectionView>
  );
};

export default SprintView;
