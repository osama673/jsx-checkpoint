import "./App.css"
import Image from "./Image"
import Description from "./Description"
import Price from "./Price"
import Name from "./Name"
import React from "react"
import { Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

let App = () => {
  let [firstName, setFirstName] = React.useState("");

  React.useEffect(() => {
    setFirstName("Ichiro Hanada");
  }, []);

  return (
    <div className="App">
      <Card style={{ maxWidth: "350px" }}>
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      <div className="content">
        {firstName ? (
          <>
            Hello,<span > {firstName}!</span>
            <br />
            <img className="pic"
              src="https://i.pinimg.com/originals/2f/ca/fc/2fcafca5f523451825853ce2e433951d.jpg" width={350}
              alt="profile"
            />
          </>
        ) : (
          "Hello, there!"
        )}
      </div>
    </div>
  );
};

export default App;
