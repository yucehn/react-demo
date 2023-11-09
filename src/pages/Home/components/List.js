import Item from "./Item";

const List = ({ listData, deleteItem, submitStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note = "", date = "", time = "", id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteItem={deleteItem}
            submitStatus={submitStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
