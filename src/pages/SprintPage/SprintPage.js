import SprintSadebar from '../../components/SprintSadebar';
import SprintTaskList from '../../components/SprintTaskList';
import SprintHeader from '../../components/SprintHeader';
import SectionView from '../../components/SectionView';
import Container from '../../components/Container';

import s from './SprintPage.module.css';

const SprintPage =() => {
    return (
        <SectionView>
        <Container>
            <div className ={s.sprint_conteiner}>
                <div>
                    <SprintSadebar />
                </div>
                <div className = {s.conteiner}>
                    <SprintHeader />
                    <SprintTaskList/>
                </div>
 
            </div>
        </Container>
      </SectionView>

    )
}
export default SprintPage;