import React from "react";
import Counter from "./Count";
import Greetings from "./Greetings";
import MyForm from "./myForm";
import ReducerSample from "./ReducerSample";

const App: React.FC = () => {
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };

  // return <Greetings name="Hello" onClick={()=>onClick("React")}/>;
  // return <Counter/>
  // return <MyForm onSubmit={onSubmit} />;
  return <ReducerSample />;
};

export default App;
