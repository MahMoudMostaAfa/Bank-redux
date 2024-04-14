import { useSelector } from "react-redux";

function Customer() {
  const customerName = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome,{customerName} </h2>;
}

export default Customer;
