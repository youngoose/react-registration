import { useForm } from 'react-hook-form';
import { UserFormInfo } from './UserForm.model';
import {
  firstNameOptions,
  lastNameOptions,
  phoneNumberOptions,
  streetOptions,
  cityOptions,
  postalCodeOptions,
  provinceOptions,
} from './UserRegister';

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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
          console.log('data: ', data);

          const { street, city, province, postalCode } = data;
          const address = `${street}, ${city}, ${province} ${postalCode}`;
          setValue('address', address);
        })}
      >
        <article>
          <h3>Basic information</h3>
          <section>
            <input
              className="border border-slate-500"
              {...register('firstName', firstNameOptions)}
              name="firstName"
              placeholder="Enter first name"
            />
            <span className="text-red-600">{errors.firstName?.message}</span>

            <input
              className="border border-slate-500"
              {...register('lastName', lastNameOptions)}
              name="lastName"
              placeholder="Enter last name"
            />
            <span className="text-red-600">{errors.lastName?.message}</span>
          </section>

          <section>
            <input
              className="border border-slate-500"
              {...register('phoneNumber', phoneNumberOptions)}
              name="phoneNumber"
              placeholder="Enter phone number"
            />
            <span className="text-red-600">{errors.phoneNumber?.message}</span>
          </section>

          <section>
            <div>
              <input
                className="border border-slate-500"
                {...register('street', streetOptions)}
                name="street"
                placeholder="Street number/name (eg. #Unit 123-123 Main st)"
              />
              <span className="text-red-600">{errors.street?.message}</span>

              <input
                className="border border-slate-500"
                {...register('city', cityOptions)}
                name="city"
                placeholder="City (optional)"
              />
              <span className="text-red-600">{errors.city?.message}</span>
            </div>

            <div>
              <select
                className="border border-slate-500"
                {...register('province', provinceOptions)}
                name="province"
                id="province"
              >
                <option value="" disabled>
                  Province
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
                name="postalCode"
                placeholder="Postal code (eg. M2K0N5 or M2K 0N5)"
              />
              <span className="text-red-600">{errors.postalCode?.message}</span>
            </div>
          </section>
        </article>

        <article>
          <h3>Your favorite Pokemon</h3>
          <input
            className="border border-slate-500"
            {...register('pokemon')}
            name="pokemon"
            placeholder="Search Pokemon"
          />
          <span className="text-red-600">{errors.pokemon?.message}</span>
        </article>

        <input type="submit" />
      </form>
    </section>
  );
}
