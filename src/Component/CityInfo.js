import React from "react";
import Card from "react-bootstrap/Card";

class CityInfo extends React.Component {
  render() {
    return (
      <div>
        {this.props.showData && (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>City Name: {this.props.citySearch}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Lat:{this.props.cityData.lat}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Lon:{this.props.cityData.lon}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default CityInfo;
