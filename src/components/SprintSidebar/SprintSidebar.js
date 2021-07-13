import { NavLink } from 'react-router-dom';
import ButtonBackspace from '../ButtonBackspace';
import s from './SprintSidebar.module.scss';
import sprite from '../../sprite.svg';
import routes from '../../routes';
import { modalActions } from '../../redux/modal';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelectors } from '../../redux/projects';

const SprintSidebar = ({ history, match }) => {
  const dispatch = useDispatch();
  const sprints = useSelector(projectSelectors.getSprints);

  const HandleBackToSprints = () => {
    history.push(`${routes.projects}/${projectId}`);
  };

  const projectId = match.params.projectId;

  const handleCreateSprint = () => {
    dispatch(modalActions.isOpenModal());
    dispatch(modalActions.openModalSprint(projectId));
    console.log('create a sprint');
  };
  return (
    <div className={s.sidebar_wrapper}>
      <ButtonBackspace text="Show sprints" onClick={HandleBackToSprints} />
      <ul className={s.sidebar_list}>
        {sprints.map(item => {
          return (
            <li className={s.item} key={item._id}>
              <NavLink
                exact
                to={`${routes.projects}/${projectId}/${item._id}`}
                className={s.link}
                activeClassName={s.isActive}
              >
                <div className={s.square}></div>
                <p className={s.title}>{item.sprint_name}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          type="button"
          onClick={handleCreateSprint}
          className={s.add_sprint_btn}
        >
          <div className={s.button_plus}>
            <svg className={s.icon_plus}>
              <use href={sprite + '#icon-plus'} />
            </svg>
          </div>
          <p className={s.add_sprint_title}>Create a sprint</p>
        </button>
      </div>
    </div>
  );
};
export default SprintSidebar;
