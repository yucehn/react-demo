const Child = (props) => {
  return (
    <div>
      child to father
      <button onClick={() => props.change("hello")}>click</button>
    </div>
  );
};

export default Child;
