import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export type CardType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  imageUrl: string;
};

interface Props {
  data: CardType;
  categoryChange: Function;
}

// function Card(props: props) {
class Card extends React.Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <div className="card border-0 m-4 shadow bg-dark bg-opacity-10">
        <img
          src={data.imageUrl}
          alt="{this.props.data.name}"
          className="card-img-top"
        />
        <button
          onClick={() => this.props.categoryChange(data.category)}
          className="text-capitalize badge bg-info border-0"
        >
          {data.category}
        </button>
        <div className="card-body">
          <div className="card-title">{data.name}</div>
          <div className="card-text">{data.description}</div>
          <div>{data.price}</div>
          <div>
            Rating : {data.rating}
            <i className="bi-star"></i>
          </div>
          {/* <button className="btn btn-primary">Order Now</button> */}
          <Link to="/order" state={data} className="btn btn-primary">
            Oder Now
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
