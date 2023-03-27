import './App.css';



function App() {

  const nayoks = ['sharukh', 'salman', 'Amir', 'Shahed'];


  return (
    <div className="App">
      {
      nayoks.map(nayok => <Name name={nayok}></Name>)
      }

      <Name></Name>
      <Name></Name>
      <Name></Name>
      <Name></Name>

      <h1>Another</h1>
      <Name2></Name2>
      <Name2></Name2>
      <Name2></Name2>
      <Name2></Name2>
    </div>
  );
}

function Name(props) {
  return (
    <div className="Tasin">
      <h1>Name : {props.name}</h1>
      <p>Age : {props.age}</p>
    </div>
  )
}

function Name2() {
  return (
    <div className="Pronoy">
      <h1>Pronoy</h1>
      <p>BSc in CSE</p>
    </div>
  )
}
export default App;
