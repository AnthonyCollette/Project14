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

    const isOlderThan18Years = (date) => {
        let birthday = new Date(date)
        let age = ~~((Date.now() - birthday) / 31557600000)
        if (age >= 18) {
            return true
        }
        return false
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input type='text' name='firstName' {...register("firstName", { required: "First name is required", maxLength: { value: 20, message: "First name must be at most 20 characters long" } })} aria-invalid={errors.firstName ? "true" : "false"} />
                {errors.firstName && (
                    <p className='error'>{errors.firstName.message}</p>
                )}
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input type='text' name='lastName' {...register("lastName", { required: "Last name is required", maxLength: { value: 20, message: "Last name must be at most 20 characters long" } })} aria-invalid={errors.lastName ? "true" : "false"} />
                {errors.lastName && (
                    <p className='error'>{errors.lastName.message}</p>
                )}
            </div>
            <div className='form-group'>
                <label htmlFor="birthDate">Date of Birth</label>
                <input type='date' name='birthDate' {...register("birthDate", { valueAsDate: true, required: { value: true, message: "Date of birth is required" }, validate: { value: date => isOlderThan18Years(date) || "You must be at least 18 years old" } })} aria-invalid={errors.birthDate ? "true" : "false"} />
                {errors.birthDate && (
                    <p className='error'>{errors.birthDate.message}</p>
                )}
            </div>
            <div className='form-group'>
                <label htmlFor="startDate">Start Date</label>
                <input type='date' name='startDate' {...register("startDate", { valueAsDate: true, required: { value: true, message: "Start date is required" }})} aria-invalid={errors.startDate ? "true" : "false"} />
                {errors.startDate && (
                    <p className='error'>{errors.startDate.message}</p>
                )}
            </div>
            <fieldset>
                <legend>Address</legend>
                <div className='form-group'>
                    <label htmlFor="street">Street</label>
                    <input type='text' name='street' {...register("street", {required: {value: true, message: "Street is required"}})} aria-invalid={errors.street ? "true" : "false"} />
                    {errors.street && (
                        <p className='error'>{errors.street.message}</p>
                    )}
                </div>
                <div className='form-group'>
                    <label htmlFor="city">City</label>
                    <input type='text' name='city' {...register("city", {required: {value: true, message: "City is required"}})} aria-invalid={errors.city ? "true" : "false"} />
                    {errors.city && (
                        <p className='error'>{errors.city.message}</p>
                    )}
                </div>
                <div className='form-group'>
                    <label htmlFor="state">State</label>
                    <select {...register("state", {required: {value: true, message: "You have to select one option"}})} aria-invalid={errors.state ? "true" : "false"}>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                    </select>
                    {errors.state && (
                        <p className='error'>{errors.state.message}</p>
                    )}
                </div>
                <div className='form-group'>
                    <label htmlFor="zip">Zip Code</label>
                    <input type='number' name='zip' {...register("zip", {required: {value: true, message: "Zip Code is required"}, valueAsNumber: true})} aria-invalid={errors.zip ? "true" : "false"} />
                    {errors.zip && (
                        <p className='error'>{errors.zip.message}</p>
                    )}
                </div>
            </fieldset>
            <div className='form-group'>
                <select {...register("department", {required: {value: true, message: "You have to select one option"}})} aria-invalid={errors.department ? "true" : "false"}>
                    <option>Sales</option>
                    <option>Marketing</option>
                </select>
                {errors.department && (
                    <p className='error'>{errors.department.message}</p>
                )}
            </div>
            <button type='submit' className='btn'>Save</button>
        </form>
    )
}

export default Form;