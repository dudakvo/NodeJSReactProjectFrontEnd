const ModalToggler = ({
  children,
  togglePeopleModal,
  toggleSprintModal,
  toggleProjectModal,
  toggleChartModal,
}) => {
  return children({
    toggleProjectModal,
    toggleSprintModal,
    togglePeopleModal,
    toggleChartModal,
    // toggle,
  });
};

export default ModalToggler;
