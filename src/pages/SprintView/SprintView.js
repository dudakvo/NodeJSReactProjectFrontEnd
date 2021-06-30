import SectionView from '../../components/SectionView';
import Container from '../../components/Container';
// import Wrapper from '../../components/Wrapper';
import SprintSidebar from '../../components/SprintSidebar';
import SprintTaskList from '../../components/SprintTaskList';
import SprintHeader from '../../components/SprintHeader';

import s from './SprintView.module.css'


const SprintView = () => {
  return (
    <SectionView>
      <Container>
        
      <div className ={s.sprint_conteiner}>
        <div className = {s.sprint_main_section}>
            <SprintSidebar />
        </div>
        <div className = {s.conteiner}>
            <SprintHeader />
            <SprintTaskList/>
        </div>

    </div>
        
      </Container>
    </SectionView>
  );
};

export default SprintView;
