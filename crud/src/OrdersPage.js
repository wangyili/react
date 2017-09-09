import React from 'react';
import { connect } from 'react-redux';
import OrdersList from './OrdersList';
import fetch from 'isomorphic-fetch';
import { NavLink, Link } from 'react-router-dom';

class OrdersPage extends React.Component {
	
	render() {
		var styleObj={
         color:"#00A99E",
         textAlign:"left"

        }

        var styleObj2={
        	backgroundColor:"#00A99E",
        	color:"white"
        }
        var ordersObj={
    		"orders": [
        		{
            		"_id": "59af2582b67be18e39498d11",
            		"seller": "Seller Zhang",
            		"buyer": "Buyer Liu",
            		"product": {
                		"_id": "59af2582b67be18e39498dzz",
                		"name": "Iphone 7 Screen Protector",
                		"image": "https://images-na.ssl-images-amazon.com/images/I/71MxlAuuUSL._SL1500_.jpg",
                		"price": 44.3,
                		"qty": 2
            		},
            		"amount": 88.6,
            		"status": "unpaid",
            		"createdAt": "2017-09-06T22:37:58.969Z"
        		},
        		{
            		"_id": "59af2582b67be18e39498d12",
            		"seller": "Seller Li",
            		"buyer": "Buyer Wang",
            		"product": {
                		"_id": "59af2582b67be18e39498dxx",
                		"name": "Anker Air Vent Magnetic Car Mount",
                		"image": "https://images-na.ssl-images-amazon.com/images/I/41xpjkgRIUL.jpg",
                		"price": 13,
                		"qty": 10
            	},
            		"amount": 130,
            		"status": "paid",
            		"createdAt": "2017-09-06T06:15:58.969Z"
        		},
        		{
            		"_id": "59af2582b67be18e39498d13",
            		"seller": "Seller Zhou",
            		"buyer": "Buyer Wu",
            		"product": {
                		"_id": "59af2582b67be18e39498doo",
                		"name": "VicTsing MM057 2.4G Wireless Portable Mobile Mouse",
                		"image": "https://images-na.ssl-images-amazon.com/images/I/718i4jG9n2L._SL1280_.jpg",
                		"price": 10,
                		"qty": 1
            		},
            		"amount": 10,
            		"status": "shipped",
            		"createdAt": "2017-09-06T12:15:58.969Z"
        		},
        		{
            		"_id": "59af2582b67be18e39498d14",
            		"seller": "Seller Zheng",
            		"buyer": "Buyer Huo",
            		"product": {
                		"_id": "59af2582b67be18e39498dqq",
                		"name": "HAVIT LED Backlit Wired Membrane Gaming Keyboard",
                		"image": "https://images-na.ssl-images-amazon.com/images/I/71AAqgh0mnL._SL1500_.jpg",
                		"price": 80,
                		"qty": 2
            		},
            		"amount": 160,
            		"status": "delivered",
            		"createdAt": "2017-09-06T23:15:58.969Z"
        		}
    		]
		}

        var emptyMsg="There is no orders yet."

		ordersObj=JSON.stringify(ordersObj);
		localStorage.setItem("t",ordersObj);
		var res=localStorage.getItem('t');
		res=JSON.parse(res);
		res?res:emptyMsg;
		console.log({res});

		return (
           <div>
              <br />
		      <h1 style={styleObj} className="ui dividing header">Order List</h1>
		      <table className="ui compact celled definition table">
		      	<thead className="full-width"><tr>
		      	  <th></th>
		      	  <th>Order ID</th>
		      	  <th>Order Seller</th>
		      	  <th>Order Buyer</th>
		      	  <th>Product Name</th>
		      	  <th>Order Amount</th>
		      	  <th>Order Status</th>
		      	  <th>Order Time</th>
		      	</tr></thead>
		      	<tbody>
		      	 <tr>
		      	  <td className="collapsing">
		      	    <div className="ui fitted slider checkbox">
		      	      <input className="hidden"  type="checkbox" />
		      	       <label></label>
		      	    </div>
		      	  </td>
		      	  <td><div className="ui ribbon label">{res["orders"][0]["_id"]}</div></td>
		      	  <td><div className="ui ribbon label">{res["orders"][0]["seller"]}</div></td>
		      	  <td><div className="ui ribbon label">{res["orders"][0]["buyer"]}</div></td>
		      	  <td><div className="ui ribbon label">{res["orders"][0]["product"]["name"]}</div></td>
		      	  <td><div className="ui ribbon label">{res["orders"][0]["amount"]}</div></td>
		      	  <td><div className="ui ribbon label">{res["orders"][0]["status"]}</div></td>
		      	  <td><div className="ui ribbon label">{res["orders"][0]["createdAt"]}</div></td>
		      	 </tr>
		      	 
		      	</tbody>
		      </table>
		       <div style={styleObj2} className="ui small button">Delete</div>
               <div style={styleObj2} className="ui small button">Delete All</div>
               <div style={styleObj2} className="ui small button">Add New Order</div>
		      <div style={styleObj2} className="ui right floated pagination menu">
		              <Link style={styleObj2} className="icon item" to="/orders"><i  className="left chevron icon"></i></Link>
		              <Link style={styleObj2} className="item" to="/orders">1</Link>
		              <Link style={styleObj2} className="item" to="/orders">2</Link>
		              <Link style={styleObj2} className="item" to="/orders">3</Link>
		              <Link style={styleObj2} className="item" to="/orders">4</Link>
		              <Link style={styleObj2} className="icon item" to="/orders"><i  className="right chevron icon"></i></Link>
		      </div>
		   </div>
		);
	}
}

OrdersPage.propTypes = {
	orders: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		orders: state.orders
	}
}

export default connect(mapStateToProps)(OrdersPage);