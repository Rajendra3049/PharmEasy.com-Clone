function Data_3_Flex(props) {
  const { img, name, off } = props;

  return (
    <div>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>{name}</div>
      <div>Upto {off}% off</div>
    </div>
  );
}
export default Data_3_Flex;
