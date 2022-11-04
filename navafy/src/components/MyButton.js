function myButton(props) {
  return (
      <button className="mybutton" type="button" onClick={props.onClick} >
        {props.btntext}
      </button>
  );
}

export default myButton;
