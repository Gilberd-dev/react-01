import '../App.css';

function Introduction(props) {
// console.log('parameter kiriman : ', props.name)
    return (
    <div>
      <h1>Introduction</h1>
      <p>Hello, My name is : {props.name}</p>
    </div>
  );
}

export default Introduction;
