import React from "react";
import StarRating from "react-native-star-rating";

class GeneralStarExample extends React.PureComponent {
  render() {
    let { rating } = this.props;
    rating = rating / 2;
    return <StarRating maxStars={5} rating={rating} fullStarColor={"gold"} />;
  }
}

export default GeneralStarExample;
