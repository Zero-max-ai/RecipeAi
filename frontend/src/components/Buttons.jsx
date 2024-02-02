const Buttons = ({ title, clickOn }) => {
  return (
    <button
      className="ring-4 py-1 px-10 rounded-sm hover:underline underline-offset-2"
      onClick={clickOn}
    >
      {title}
    </button>
  );
};

export default Buttons;
