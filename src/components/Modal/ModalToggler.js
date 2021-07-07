const ModalToggler = ({
  children,
  togglePeopleModal,
  toggleSprintModal,
  toggleProjectModal,
  toggleChartModal,
  toggleTaskModal,
}) => {
  return children({
    toggleProjectModal,
    toggleSprintModal,
    togglePeopleModal,
    toggleChartModal,
    toggleTaskModal,
    // toggle,
  });
};

export default ModalToggler;
