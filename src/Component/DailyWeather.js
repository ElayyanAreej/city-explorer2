import React from "react";
import Card from "react-bootstrap/Card";

class DailyWeather extends React.Component {
  render() {
    return (
        <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Date:{this.props.date}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Description:{this.props.description}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    );
  }
}

export default DailyWeather;
