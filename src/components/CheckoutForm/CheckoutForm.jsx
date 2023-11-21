import classes from './CheckoutForm.module.css'
import { appendErrors, useForm } from 'react-hook-form';

const CheckoutForm = ({onConfirm}) => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = handleSubmit((userData) => {
        onConfirm(userData)
    })

    return(

        <div className={classes.form}>
            <form onSubmit={onSubmit}>
                <label htmlFor='firsName'>Nombre</label>
                <input {...register("firstName", {
                    required: {
                        value: true,
                        message: "Nombre es requerido",
                    },
                    maxLength: {
                        value: 10,
                        message: "Nombre debe tener máximo 10 caracteres",
                    },
                    minLength: {
                        value: 3,
                        message: "Nombre debe tener mínimo 3 caracteres",    
                    }
                })}/>
                {
                    errors.firstName && <p>{errors.firstName.message}</p>
                }
                <label>Apellido</label>
                <input {...register("lastName",{
                    required: {
                        value: true,
                        message: "Apellido es requerido",
                    },
                    maxLength: {
                        value: 20,
                        message: "Apellido debe tener máximo 20 caracteres",
                    },
                    minLength: {
                        value: 3,
                        message: "Apellido debe tener mínimo 3 caracteres",    
                    }
                })}/>
                {
                    errors.lastName && <p>{errors.lastName.message}</p>
                }
                <label>Correo Electrónico</label>
                <input {...register("email",{
                    required: {
                        value: true,
                        message: "Correo es requerido",
                    },
                    pattern: {
                        value: /[a-z0-9_.-]+@[a-z0-9-]+.[a-z]{2,4}/,
                        message: "Correo no válido",
                        },
                })}/>
                {
                    errors.email && <p>{errors.email.message}</p>
                }
                <label>Teléfono</label>
                <input {...register("phone", {
                    required: {
                        value: true,
                        message: "Teléfono es requerido"
                    },
                    pattern: {
                        value:/[0-9]{8,10}/,
                        message: "Teléfono no válido"
                    }
                })}/>
                {
                    errors.phone && <p>{errors.phone.message}</p>
                }
                <button type="submit">Confirmar compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm
