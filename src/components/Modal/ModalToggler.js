import { useState } from 'react';

const ModalToggler = ({ children }) => {
  const [showModalProject, setShowModalProject] = useState(false);
  // const showModalProject = true;
  const showModalSprint = false;
  const showModalAddPeople = false;

  const toggle = () => setShowModalProject(prev => !prev);

  return children({
    showModalProject,
    showModalSprint,
    showModalAddPeople,
    toggle,
  });
};

export default ModalToggler;
