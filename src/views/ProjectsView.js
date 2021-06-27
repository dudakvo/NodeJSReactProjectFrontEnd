import SectionView from '../components/SectionView';
import ProjectsList from '../components/ProjectsList';
import ProjectsViewTitel from '../components/ProjectsViewTitel';
const projects = [
  { id: 1, name: 'project1', description: 'Короткий опис проекту...' },
  { id: 2, name: 'project2', description: 'Короткий опис проекту...' },
  {
    id: 3,
    name: 'Дуже довга назва проекту',
    description: 'Короткий опис проекту...',
  },
  { id: 4, name: 'project3', description: 'Короткий опис проекту...' },
  {
    id: 5,
    name: 'Дуже довга назва проекту',
    description: 'Короткий опис проекту...',
  },
  { id: 6, name: 'project3', description: 'Короткий опис проекту...' },
];
const ProjectsView = () => {
  return (
    <SectionView>
      <ProjectsViewTitel />
      <ProjectsList projects={projects} />
    </SectionView>
  );
};

export default ProjectsView;
