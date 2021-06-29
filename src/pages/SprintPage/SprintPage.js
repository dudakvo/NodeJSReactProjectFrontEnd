import SprintSidebar from '../../components/SprintSidebar';
import SprintTaskList from '../../components/SprintTaskList';
import SprintHeader from '../../components/SprintHeader';
// import SectionView from '../../components/SectionView';
// import Container from '../../components/Container';

import s from './SprintPage.module.css';

const SprintPage =() => {
    return (

    <div className ={s.sprint_conteiner}>
        <div className = {s.sprint_main_section}>
            <SprintSidebar />
        </div>
        <div className = {s.conteiner}>
            <SprintHeader />
            <SprintTaskList/>
        </div>

    </div>
    //     <SectionView>
    //     <Container>

    //     </Container>
    //   </SectionView>

    )
}
export default SprintPage;