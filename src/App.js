import { BadgeCheckIcon, CreditCardIcon } from "@heroicons/react/outline";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import CheckOut from "./components/CheckOut";
import DeliveryDetails from "./components/DeliveryDetails";
import ItemsCount from "./components/ItemsCount";

import ProgressBar from "./components/ProgressBar";
import Table from "./components/Table";

function App() {
  return (
    <div className="bg-gray-100 pb-10  min-w-[450px]">
      <nav className="bg-white px-5 xl:px-0 py-3">
        <div className="flex items-center md:max-w-screen-xl mx-auto">
          <ArrowLeftIcon className="h-5 w-5 text-gray-400" />
          <h2 className="mx-auto text-2xl font-bold">Grocy</h2>
        </div>
      </nav>

      <main className="px-5 xl:px-0 md:max-w-screen-xl mx-auto">
        <ProgressBar />
        <div className="flex flex-col md:flex-row md:justify-between">
          <section className="md:w-[65%] mb-10 md:mb-0">
            <div className="bg-white px-10 py-5 shadow-md rounded-lg">
              <Table />
            </div>

            <DeliveryDetails />
          </section>

          <section className="md:w-[30%]">
            <ItemsCount />

            <div className="flex justify-between items-center bg-white px-10 py-5 rounded-lg mb-10">
              <div className="flex items-center space-x-5">
                <BadgeCheckIcon className="h-10 w-10 lg:h-14 lg:w-14 text-white bg-green-500 rounded-full p-1 lg:p-3" />
                <p className="font-semibold">Payment Done</p>
              </div>
              <CreditCardIcon className="h-6 w-6 text-green-500" />
            </div>

            <CheckOut />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
