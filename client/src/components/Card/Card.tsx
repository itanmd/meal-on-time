import React from "react";
import "./Card.css";

export type CardType = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  imageUrl: string;
};

interface Props {
  data: CardType;
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
        <div className="text-capitalize">{data.category}</div>
        <div className="card-body">
          <div className="card-title">{data.name}</div>
          <div className="card-text">{data.description}</div>
          <div>{data.price}</div>
          <div>
            Rating : {data.rating}
            <i className="bi-star"></i>
          </div>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    );
  }
}

export default Card;
