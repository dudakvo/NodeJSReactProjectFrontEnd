const ModalToggler = ({
  children,
  togglePeopleModal,
  toggleSprintModal,
  toggleProjectModal,
}) => {
  return children({
    toggleProjectModal,
    toggleSprintModal,
    togglePeopleModal,
    // toggle,
  });
};

export default ModalToggler;
