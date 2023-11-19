import { useForm } from 'react-hook-form';

const CheckoutForm = ({onConfirm}) => {
    const {register, handleSubmit} = useForm();
    
    const onSubmit = (userData) => {
        onConfirm(userData)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")}  placeholder='Nombre' />
            <input {...register("lastName")} placeholder='Apellido' />
            <input {...register("email")} placeholder='Correo Electrónico' />
            <input {...register("phone")} placeholder='Teléfono' />
            <input type="submit" value='Confirmar Compra'/>
        </form>
    )
}

export default CheckoutForm
