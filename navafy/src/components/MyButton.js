function myButton(props) {
  return (
    <button className="mybutton shadow" type="button" onClick={props.onClick}>
      {props.btntext}
    </button>
  );
}

export default myButton;
