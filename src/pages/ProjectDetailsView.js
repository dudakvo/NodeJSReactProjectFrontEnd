import Container from '../components/Container';
import SectionView from '../components/SectionView';
import Sidebar from '../components/Sidebar';
import Project from '../components/Project';
import Wrapper from '../components/Wrapper';

const ProjectDetailsView = () => {
  return (
    <SectionView>
      <Container>
        <Wrapper>
          <Sidebar />
          <Project />
        </Wrapper>
      </Container>
    </SectionView>
  );
};

export default ProjectDetailsView;
