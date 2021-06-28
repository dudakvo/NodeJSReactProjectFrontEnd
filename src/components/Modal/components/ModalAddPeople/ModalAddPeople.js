import s from '../modal.module.scss';

const ModalAddPeople = ({ listEmail, mes }) => {
  return (
    <div className={s.backdrop}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h2 className={s.title}>Add people</h2>
        </div>
        <div className={s.body}>
          <form className={s.formWrapper}>
            <div className={s.inputWrapper}>
              <input type="text" id="name" placeholder=" " />
              <label htmlFor="name">Enter e-mail</label>
            </div>
          </form>
          <p>Added users:</p>

          {listEmail.length !== 0 ? (
            <ul className={s.listEmail}>
              {listEmail.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          ) : (
            <p>{mes}</p>
          )}
        </div>
        <div className={s.footer}>
          <button type="button">Ready</button>
          <button type="button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddPeople;
