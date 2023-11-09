const Item = ({ id, note, date, time, deleteItem }) => {
  function deleteData(){
    deleteItem(function(prevData){
      return prevData.filter(item => item.id !== id)
    })
  }
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteData}>刪除</button>
    </div>
  );
};

export default Item;
