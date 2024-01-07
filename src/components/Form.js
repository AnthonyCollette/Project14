import { useForm } from 'react-hook-form';

const Form = ({ handleFormSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        handleFormSubmit()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input type='text' name='firstName' {...register("firstName", { required: "First name is required", maxLength: { value: 20, message: "First name must be at most 20 characters long" }})} aria-invalid={errors.firstName ? "true" : "false"} />
                {errors.firstName && (
                    <p className='error'>{errors.firstName.message}</p>
                )}
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input type='text' name='lastName' {...register("lastName", {required: "Last name is required", maxLength: {value: 20, message: "Last name must be at most 20 characters long"}})} aria-invalid={errors.lastName ? "true" : "false"} />
                {errors.lastName && (
                    <p className='error'>{errors.lastName.message}</p>
                )}
            </div>
            <div className='form-group'>
                <label htmlFor="birthDate">Date of Birth</label>
                <input type='date' name='birthDate' {...register("birthDate", { valueAsDate: true, required: {value: true, message: "Date of birth is required"}})} />
            </div>
            <div className='form-group'>
                <label htmlFor="startDate">Start Date</label>
                <input type='date' name='startDate' {...register("startDate")} />
            </div>
            <fieldset>
                <legend>Address</legend>
                <div className='form-group'>
                    <label htmlFor="street">Street</label>
                    <input type='text' name='street' {...register("street")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="city">City</label>
                    <input type='text' name='city' {...register("city")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="state">State</label>
                    <select {...register("state")}>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="zip">Zip Code</label>
                    <input type='text' name='zip' {...register("zip")} />
                </div>
            </fieldset>
            <div className='form-group'>
                <select {...register("department")}>
                    <option>Sales</option>
                    <option>Marketing</option>
                </select>
            </div>
            <button type='submit' className='btn'>Save</button>
        </form>
    )
}

export default Form;