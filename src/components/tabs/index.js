import './index.css';

const Tabs = ({ setActive, active }) => {
  const changeTab = value => () => {
    if (active === value) return;

    setActive(value);
  };

  return (
    <div className="tabs__wrapper">
      <button
        className={`tabs__tab ${active ? 'active' : ''}`}
        type="button"
        onClick={changeTab(true)}
      >
        Task 1
      </button>
      <button
        className={`tabs__tab ${!active ? 'active' : ''}`}
        type="button"
        onClick={changeTab(false)}
      >
        Task 2
      </button>
    </div>
  );
};

export default Tabs;
