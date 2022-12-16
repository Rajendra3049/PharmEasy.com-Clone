function ITP({ img, title, price }) {
  return (
    <div>
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <b>{title}</b>
      </div>
      <hr />
      <div>Rs.{price}</div>
    </div>
  );
}
export default ITP;
