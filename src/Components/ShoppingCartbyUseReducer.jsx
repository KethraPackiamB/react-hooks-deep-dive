import React, { useReducer } from "react";

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "INCREASE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }

    case "DECREASE_QUANTITY": {
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
      break;
  }
};

const products = [
  { id: "1", name: "Ring", amount: "600" },
  { id: "2", name: "Coconut Oil", amount: "120" },
  { id: "3", name: "Dry Fruits", amount: "700" },
  { id: "4", name: "Pen Stand", amount: "80" },
  { id: "5", name: "Coffee Powder", amount: "350" },
  { id: "6", name: "Chips", amount: "50" },
  { id: "7", name: "Chocolate", amount: "100" },
];

const ShoppingCartbyUseReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state);

  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.amount * item.quantity,
    0,
  );

  return (
    <div>
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h1>🛒 Shopping Cart</h1>
      <div style={{ border: "1px solid #000", padding: "20px" }}>
        <div>
          <h3>🎁 Products</h3>

          <table>
           
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td> - </td>
                  <td>₹{product.amount}</td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: product })
                      }
                      style={{ marginLeft: "20px" }}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />

        <h3>🧺 Cart Items</h3>
        {state.cart.length === 0 && <p>Cart is empty</p>}
        {state.cart.map((item) => (
          <div key={item.id}>
            <span>
              {item.name} - ₹{item.amount}
            </span>
            <br />
            Quantity : {item.quantity}
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              <button
                onClick={() =>
                  dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
                }
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
                }
              >
                -
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: item.id })
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <hr />

        <h3>🧾 Total Price : ₹{totalPrice}</h3>
        {state.cart.length > 0 && (
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Buy Now
          </button>
        )}
      </div>
     
    </div>
    <hr />
    </div>
  );
};

export default ShoppingCartbyUseReducer;
