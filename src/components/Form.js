import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const Form = ({ handleFormSubmit }) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const dispatch = useDispatch()

    const onSubmit = (data, e) => {
        let id = Math.round((Date.now() + Math.random()))
        dispatch({
            type: 'users/addUser',
            payload: {
                id,
                firstName: data.firstName,
                lastName: data.lastName,
                startDate: data.startDate.toLocaleDateString("en-US"),
                department: data.department,
                birthDate: data.birthDate.toLocaleDateString("en-US"),
                street: data.street,
                city: data.city,
                zip: data.zip
            },
        })
        e.target.reset()
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
                <label htmlFor="firstName" id="firstNameLabel">First Name</label>
                <input type='text' name='firstName' aria-labelledby='firstNameLabel' {...register("firstName", { required: "First name is required", maxLength: { value: 20, message: "First name must be at most 20 characters long" } })} aria-invalid={errors.firstName ? "true" : "false"} />
                {errors.firstName && (
                    <p className='error'>{errors.firstName.message}</p>
                )}
            </div>
            <div className='form-group'>
                <label htmlFor="lastName" id="lastNameLabel">Last Name</label>
                <input type='text' name='lastName' aria-labelledby='lastNameLabel' {...register("lastName", { required: "Last name is required", maxLength: { value: 20, message: "Last name must be at most 20 characters long" } })} aria-invalid={errors.lastName ? "true" : "false"} />
                {errors.lastName && (
                    <p className='error'>{errors.lastName.message}</p>
                )}
            </div>
            <div className='form-group'>
                <label htmlFor="birthDate" id="birthDateLabel">Date of Birth</label>
                <input type='date' name='birthDate' aria-labelledby='birthDateLabel' {...register("birthDate", { valueAsDate: true, required: { value: true, message: "Date of birth is required" }, validate: { value: date => isOlderThan18Years(date) || "You must be at least 18 years old" } })} aria-invalid={errors.birthDate ? "true" : "false"} />
                {errors.birthDate && (
                    <p className='error'>{errors.birthDate.message}</p>
                )}
            </div>
            <div className='form-group'>
                <label htmlFor="startDate" id="startDateLabel">Start Date</label>
                <input type='date' name='startDate' aria-labelledby='startDateLabel' {...register("startDate", { valueAsDate: true, required: { value: true, message: "Start date is required" } })} aria-invalid={errors.startDate ? "true" : "false"} />
                {errors.startDate && (
                    <p className='error'>{errors.startDate.message}</p>
                )}
            </div>
            <fieldset>
                <legend>Address</legend>
                <div className='form-group'>
                    <label htmlFor="street" id="streetLabel">Street</label>
                    <input type='text' name='street' aria-labelledby='streetLabel' {...register("street", { required: { value: true, message: "Street is required" } })} aria-invalid={errors.street ? "true" : "false"} />
                    {errors.street && (
                        <p className='error'>{errors.street.message}</p>
                    )}
                </div>
                <div className='form-group'>
                    <label htmlFor="city" id="cityLabel">City</label>
                    <input type='text' name='city' aria-labelledby='cityLabel' {...register("city", { required: { value: true, message: "City is required" } })} aria-invalid={errors.city ? "true" : "false"} />
                    {errors.city && (
                        <p className='error'>{errors.city.message}</p>
                    )}
                </div>
                <div className='form-group'>
                    <label htmlFor="state" id="stateLabel">State</label>
                    <select aria-labelledby='stateLabel' {...register("state", { required: { value: true, message: "You have to select one option" } })} aria-invalid={errors.state ? "true" : "false"}>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District Of Columbia">District Of Columbia</option>
                        <option value="Federated States Of Micronesia">Federated States Of Micronesia</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Guam">Guam</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Palau">Palau</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virgin Islands">Virgin Islands</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </select>
                    {errors.state && (
                        <p className='error'>{errors.state.message}</p>
                    )}
                </div>
                <div className='form-group'>
                    <label htmlFor="zip" id='zipLabel'>Zip Code</label>
                    <input type='number' name='zip' aria-labelledby='zipLabel' {...register("zip", { required: { value: true, message: "Zip Code is required" }, valueAsNumber: true })} aria-invalid={errors.zip ? "true" : "false"} />
                    {errors.zip && (
                        <p className='error'>{errors.zip.message}</p>
                    )}
                </div>
            </fieldset>
            <div className='form-group'>
                <label htmlFor='department' id="departmentLabel">Department</label>
                <select name='department' aria-labelledby='departmentLabel' {...register("department", { required: { value: true, message: "You have to select one option" } })} aria-invalid={errors.department ? "true" : "false"}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                {errors.department && (
                    <p className='error'>{errors.department.message}</p>
                )}
            </div>
            <button type='submit' className='btn' aria-label="Save">Save</button>
        </form>
    )
}

export default Form;