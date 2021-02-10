const AdminCheckBox = ({ vac, index, stateHandlers }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <input
          className="mr-2"
          type="checkbox"
          id={vac.id}
          checked={vac.hotVacancy}
          onChange={() => stateHandlers.forHotVacancy(index)}
        />
        <label className="m-0" htmlFor={vac.id}>
          Горячая вакансия
        </label>
      </div>
      <div className="d-flex align-items-center">
        <input
          className="mr-2"
          type="checkbox"
          id={vac.id}
          checked={vac.isThereBonus}
          onChange={() => stateHandlers.forBonus(index)}
        />
        <label className="m-0" htmlFor={vac.id}>
          Наличие бонуса
        </label>
      </div>
    </>
  );
};
export default AdminCheckBox;
