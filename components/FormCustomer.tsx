import { ReservationStore, useStore } from "@/store/store";
import { ChangeEvent, FormEvent, useState } from "react";
import { shallow } from "zustand/shallow";
import { toast } from "react-toastify";

export const FormCustomer = () => {
  const [inputs, setInputs] = useState({ name: "", telefono: "" });

  const state = useStore(
    (state) => ({
      services: state.services,
      appointment_from: state.appointment_from,
      appointment_to: state.appointment_to,
      setRequest: state.setRequest,
      owner_id: state.owner_id,
      closeModalCustomer: state.closeModalCustomer,
      openModalCheckout: state.openModalCheckout,
    }),
    shallow
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputs.telefono === "") {
      return toast.error("Debe especificar un numero de telefono", {
        position: "top-right",
      });
    }
    const request: ReservationStore = {
      appointment_from: state.appointment_from,
      appointment_to: state.appointment_to,
      customer_name: inputs.name,
      customer_phone_number: inputs.telefono,
      item_details: state.services,
      note: "",
      store_id: state.owner_id,
    };
    state.setRequest(request);
    state.openModalCheckout();
    state.closeModalCustomer();
  };

  return (
    <form
      className='w-3/4 h-40 flex flex-col justify-center'
      onSubmit={handleClick}
    >
      <input
        type='text'
        name='name'
        placeholder='Nombre & Apellido'
        className='w-full h-10 rounded-lg p-3 border-collapse border-2 shadow-md'
        onChange={handleChange}
        value={inputs.name}
      />
      <div className=' h-28 flex justify-around items-center gap-10'>
        <input
          onChange={handleChange}
          name='telefono'
          type='tel'
          value={inputs.telefono}
          pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
          placeholder='Telefono Movil'
          className='w-full h-10 rounded-lg p-3 border-collapse border-2 shadow-md invalid:border-red-500 required '
        />
      </div>
      <button className='w-full rounded-lg h-20 shadow-md bg-green-500 font-bold'>
        Ver detalle
      </button>
    </form>
  );
};
