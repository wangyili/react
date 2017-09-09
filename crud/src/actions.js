export function fetchOrders(){
	return dispatch => {
		fetch('/api/orders');
	}
}