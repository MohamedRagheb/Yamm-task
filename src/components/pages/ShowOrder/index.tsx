// Components
import Paper, { PaperTitle } from "@/components/ui/core/Paper";

// Containers
import useShowOrder from "./useShowOrder";

const ShowOrder = () => {
  const { orderData, goBack } = useShowOrder();
  return (
    <Paper className="p-8 space-y-6 h-fit">
      <div className="flex gap-2 w-full">
        <PaperTitle title="Show Order" />
        <button
          type="button"
          onClick={() => goBack()}
          className="bg-transparent border border-gray-100 font-medium text-md border-1 border-gray-300 px-2 rounded-lg cursor-pointer"
        >
          Go Back
        </button>
      </div>
      <div className="p-4 bg-gray-50 shadow-md">
        {/* Store Info */}
        <div className="mb-4 text-center">
          <img
            src={orderData?.store_logo}
            alt={orderData?.store_name}
            className="w-24 h-24 mx-auto mb-2 rounded-full"
          />
          <a
            href={orderData?.store_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-blue-500 hover:underline"
          >
            {orderData?.store_name}
          </a>
        </div>

        {/* Basic Info */}
        <div className="mb-4">
          <p>
            <strong>ID:</strong> {orderData?.id}
          </p>
          <p>
            <strong>Reason:</strong> {orderData?.reason}
          </p>
          <p>
            <strong>Amount:</strong> ${orderData?.amount}
          </p>
          <p>
            <strong>Active:</strong> {orderData?.active ? "Yes" : "No"}
          </p>
          <p>
            <strong>Decision:</strong> {orderData?.decision || "Pending"}
          </p>
        </div>

        {/* Items */}
        <div>
          <h3 className="mb-2 text-lg font-bold">Items:</h3>
          <ul className="space-y-2">
            {orderData?.Items.map((item) => (
              <li key={item.id} className="p-2 bg-gray-200 rounded-lg px-4">
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Price:</strong> ${item.price}
                </p>
                <p>
                  <strong>Quantity:</strong> {item.quantity}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Paper>
  );
};

export default ShowOrder;
