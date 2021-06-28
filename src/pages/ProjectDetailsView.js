import Container from '../components/Container';
import SectionView from '../components/SectionView';
import Sidebar from '../components/Sidebar';
import Project from '../components/Project';

const ProjectDetailsView = () => {
  return (
    <SectionView>
      <Container>
        <Sidebar />
        <Project />
      </Container>
    </SectionView>
  );
};

export default ProjectDetailsView;
