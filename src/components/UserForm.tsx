import { useForm } from 'react-hook-form';
import { UserFormInfo } from '../model/UserForm.model';
import { Link } from 'react-router-dom';
import {
  firstNameOptions,
  lastNameOptions,
  phoneNumberOptions,
  streetOptions,
  cityOptions,
  postalCodeOptions,
  provinceOptions,
} from '../register/UserRegister';

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm<UserFormInfo>({
    mode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      street: '',
      city: '',
      province: '',
      postalCode: '',
    },
  });

  return (
    <section>
      <form
        onSubmit={handleSubmit((data) => {
          // TODO: do this logic on review page
          // const { street, city, province, postalCode } = data;
          // const address = `${street}, ${city}, ${province} ${postalCode}`;
          // setValue('address', address);
          console.log('data: ', data);
        })}
      >
        <article>
          <h3>Basic information</h3>
          <section>
            <input
              className="border border-slate-500"
              {...register('firstName', firstNameOptions)}
              placeholder="Enter first name"
            />
            <span className="text-red-600">{errors.firstName?.message}</span>

            <input
              className="border border-slate-500"
              {...register('lastName', lastNameOptions)}
              placeholder="Enter last name"
            />
            <span className="text-red-600">{errors.lastName?.message}</span>
          </section>

          <section>
            <input
              className="border border-slate-500"
              {...register('phoneNumber', phoneNumberOptions)}
              placeholder="Enter phone number"
            />
            <span className="text-red-600">{errors.phoneNumber?.message}</span>
          </section>

          <section>
            <div>
              <input
                className="border border-slate-500"
                {...register('street', streetOptions)}
                placeholder="Street number/name (eg. #Unit 123-123 Main st)"
              />
              <span className="text-red-600">{errors.street?.message}</span>

              <input
                className="border border-slate-500"
                {...register('city', cityOptions)}
                placeholder="City (optional)"
              />
              <span className="text-red-600">{errors.city?.message}</span>
            </div>

            <div>
              <select
                className="border border-slate-500"
                {...register('province', provinceOptions)}
              >
                <option value="" disabled>
                  Please select province
                </option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="YT">Yukon</option>
              </select>
              <span className="text-red-600">{errors.province?.message}</span>

              <input
                className="border border-slate-500"
                {...register('postalCode', postalCodeOptions)}
                placeholder="Postal code (eg. M2K0N5 or M2K 0N5)"
              />
              <span className="text-red-600">{errors.postalCode?.message}</span>
            </div>
          </section>
        </article>

        <button type="submit">Save</button>

        <Link to="/favorite-pokemon">
          {/* TOOD: either store the state or capture the register */}
          <button disabled={!isSubmitSuccessful}>Continue</button>
        </Link>
      </form>
    </section>
  );
}
