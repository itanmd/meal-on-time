import { useLocation } from "react-router-dom";
import { CardType } from "../Card/Card";
import Title from "../Title/Title";

interface LocationState {
  state: CardType;
}

function Order() {
  const location = useLocation();
  const locationState = location as LocationState;
  const order = locationState.state;

  
  return (
    <>
      <Title text={`Order: ${order.name}`}> 
        <small className="text-muted d-block">
          <span>Name of the restaurant</span>
        </small>
      </Title>

      <div className="container">
        <div className="row">
          <div className="col-8">
           <div>{order.description}</div>

            <div className="mt-3">
              <label>Comments</label>
              <div>
                <textarea cols={30} rows={4} />
              </div>
            </div>
          </div>

          <div className="col-4">
            <img src={order.imageUrl} alt={order.name} className="img-fluid"/>
            <div className="d-flex justify-content-between">
              <div>Rating: {order.rating}</div>
              <div>{order.category}</div>
            </div>
          </div>
        </div>
         

         <hr/>
         <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Name" />
                            <input type="text" className="form-control" placeholder="Address" />
                            <input type="text" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="col">
                            <select className="form-select">
                                <option>Delivery</option>
                            </select>

                            <label className="form-label">Payment Method:</label>
                            <select className="form-select">
                                <option>Payment</option>
                            </select>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-4">
                                    <label className="form-label">Price:</label>
                                </div>
                                <div className="col-8">
                                    {order.price}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <label className="form-label">Delivery:</label>
                                </div>
                                <div className="col-8">
                                    { }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <label className="form-label">Total:</label>
                                </div>
                                <div className="col-8">
                                    { }
                                </div>
                            </div>

                            <button className="btn btn-primary btn-lg">Pay Now</button>
                        </div>
                    </div>
                </div>




      </div>
    </>
  ) 
}

export default Order;
