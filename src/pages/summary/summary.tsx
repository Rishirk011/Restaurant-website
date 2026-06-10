import { useStore } from "../../store/store";
import { useNavigate, Link } from "react-router-dom";

export default function Summary() {
  const navigate = useNavigate();
  const { items, remove, inc, dec,clearItems } = useStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18);
  const delivery = subtotal > 500 ? 0 : 99;
  const total = subtotal + tax + delivery;

  if (items.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-secondary">Your cart is empty.</p>
        <button className="btn btn-success btn-sm" onClick={() => navigate("/foods")}>
          Go to Shop
        </button>
      </div>
    );
  }


  return (
    <div style={{ maxWidth: 420 }} className="mx-auto py-4 px-3">

      <h6 className="fw-medium mb-3">Order summary</h6>

      {items.map((item, idx) => (
        <div
          key={item.id}
          className={`d-flex align-items-center gap-3 py-3 ${
            idx < items.length - 1 ? "border-bottom" : ""
          }`}
        >
          <img
            src={item.img}
            alt={item.name}
            style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 8, flexShrink: 0 }}
          />

          <div className="flex-grow-1 overflow-hidden">
            <p className="mb-0 fw-medium text-truncate" style={{ fontSize: 14 }}>{item.name}</p>
            <small className="text-muted">₹{item.price} each</small>
            <div className="d-flex align-items-center gap-2 mt-1">
              <button
                className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: 24, height: 24 }}
                onClick={() => dec(item)}
                aria-label="Decrease"
              >
                <i className="bi bi-dash" style={{ fontSize: 13 }} />
              </button>
              <span style={{ fontSize: 13, fontWeight: 500, minWidth: 14, textAlign: "center" }}>
                {item.quantity}
              </span>
              <button
                className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: 24, height: 24 }}
                onClick={() => inc(item)}
                aria-label="Increase"
              >
                <i className="bi bi-plus" style={{ fontSize: 13 }} />
              </button>
            </div>
          </div>

          <span className="fw-medium flex-shrink-0" style={{ fontSize: 14 }}>
            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
          </span>

          <button
            className="btn btn-sm p-0 text-secondary flex-shrink-0"
            onClick={() => remove(item)}
            aria-label="Remove"
          >
            <i className="bi bi-x" style={{ fontSize: 16 }} />
          </button>
        </div>
      ))}

      <div className="mt-3 d-flex flex-column gap-2">
        <div className="d-flex justify-content-between" style={{ fontSize: 14 }}>
          <span className="text-secondary">Subtotal</span>
          <span>₹{subtotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="d-flex justify-content-between" style={{ fontSize: 14 }}>
          <span className="text-secondary">Delivery</span>
          <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
        </div>
        <div className="d-flex justify-content-between" style={{ fontSize: 14 }}>
          <span className="text-secondary">Tax (18%)</span>
          <span>₹{tax.toLocaleString("en-IN")}</span>
        </div>
        <hr className="my-1" />
        <div className="d-flex justify-content-between fw-medium">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <Link className="btn btn-dark w-100 mt-4"
      to={'/'} onClick={clearItems}>
        Place order
      </Link>

    </div>
  );
}