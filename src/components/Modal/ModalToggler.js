const ModalToggler = ({
  children,
  togglePeopleModal,
  toggleSprintModal,
  toggleProjectModal,
  toggleTaskModal,
}) => {
  return children({
    toggleProjectModal,
    toggleSprintModal,
    togglePeopleModal,
    toggleTaskModal,
    // toggle,
  });
};

export default ModalToggler;
