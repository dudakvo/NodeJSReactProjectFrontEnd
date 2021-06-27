import SectionView from '../components/SectionView';
import ProjectsList from '../components/ProjectsList';
import ProjectsViewTitel from '../components/ProjectsViewTitel';
import Container from '../components/Container';

const ProjectsView = () => {
  return (
    <SectionView>
      <Container>
        <ProjectsViewTitel />
        <ProjectsList />
      </Container>
    </SectionView>
  );
};

export default ProjectsView;
