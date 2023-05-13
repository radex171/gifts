function Gift(props) {
  console.log("propsy", props);
  const { name } = props.gift;
  return <h2>{name}</h2>;
}

export default Gift;
