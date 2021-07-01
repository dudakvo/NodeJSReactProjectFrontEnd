import { NavLink } from 'react-router-dom';
import ButtonBackspace from '../ButtonBackspace';
import s from './SprintSidebar.module.scss';
import sprite from '../../sprite.svg';
import routes from '../../routes';

const sprints = [
  { id: 1, name: 'sprint 1' },
  { id: 2, name: 'sprint 2' },
  {
    id: 3,
    name: 'sprint 3',
  },
];

const SprintSidebar = ({ history }) => {
  const HandleBackToSprints = () => {
    history.push(routes.projectDetails);
  };

  const handleCreateSprint = () => {
    console.log('create a sprint');
  };
  return (
    <div className={s.sidebar_wrapper}>
      <ButtonBackspace text="Show sprints" onClick={HandleBackToSprints} />
      <ul className={s.sidebar_list}>
        {sprints.map(item => (
          <li className={s.item} key={item.id}>
            <NavLink
              exact
              to={`${routes.projectDetails}/${item.id}`}
              className={s.link}
              activeClassName={s.isActive}
            >
              <div className={s.square}></div>
              <p className={s.title}>{item.name}</p>
            </NavLink>
          </li>
        ))}
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
