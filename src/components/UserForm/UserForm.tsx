import { useForm } from 'react-hook-form';
import { UserFormInfo } from './UserForm.model';
import { Link } from 'react-router-dom';
import {
  firstNameOptions,
  lastNameOptions,
  phoneNumberOptions,
  streetOptions,
  cityOptions,
  postalCodeOptions,
  provinceOptions,
} from '../../register/UserRegister';
import Button from '../ui/Button';

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
    <section className="min-h-screen p-6 bg-gray-100">
      <form
        className="container max-w-screen-lg mx-auto"
        onSubmit={handleSubmit((data) => {
          // TODO: do this logic on review page
          // const { street, city, province, postalCode } = data;
          // const address = `${street}, ${city}, ${province} ${postalCode}`;
          // setValue('address', address);
          console.log('data: ', data);
        })}
      >
        <article className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="text-gray-600">
            <h3 className="font-semibold text-xl">Personal Details</h3>
            <p className="text-gray-500 mb-6">
              Please fill out all the fields. Save and Continue.
            </p>
          </div>

          <div>
            <section>
              <input
                className="h-10 border rounded px-4 md:w-1/4 w-full"
                {...register('firstName', firstNameOptions)}
                placeholder="Enter first name"
              />
              <span className="text-red-600 m-0 sm:ml-2">
                {errors.firstName?.message}
              </span>

              <input
                className="mt-2 ml-0 sm:ml-2 h-10 border rounded px-4 md:w-1/4 w-full"
                {...register('lastName', lastNameOptions)}
                placeholder="Enter last name"
              />
              <span className="text-red-600 m-0 sm:ml-2">
                {errors.lastName?.message}
              </span>
            </section>

            <section className="mt-2">
              <input
                className="h-10 border rounded px-4 md:w-3/6 w-full"
                {...register('phoneNumber', phoneNumberOptions)}
                placeholder="Enter phone number"
              />
              <span className="text-red-600 m-0 sm:ml-2">
                {errors.phoneNumber?.message}
              </span>
            </section>

            <section className="mt-2">
              <div>
                <input
                  className="h-10 border rounded px-4"
                  {...register('street', streetOptions)}
                  placeholder="Street (123-123 Main st)"
                />
                <span className="text-red-600 m-0 inline-block sm:ml-2">
                  {errors.street?.message}
                </span>

                <input
                  className="ml-0 sm:ml-2 h-10 border mt-2 rounded px-4 md:w-1/6 w-full"
                  {...register('city', cityOptions)}
                  placeholder="City"
                />
                <span className="text-red-600 m-0 sm:ml-2">
                  {errors.city?.message}
                </span>
              </div>

              <div className="mt-2">
                <select
                  className="h-10 border rounded px-4 md:w-1/4 w-full"
                  {...register('province', provinceOptions)}
                >
                  <option value="" disabled>
                    Choose province
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
                <span className="text-red-600 m-0 sm:ml-2">
                  {errors.province?.message}
                </span>

                <input
                  className="sm:ml-2 h-10 border mt-2 rounded px-4 md:w-3/12 w-full"
                  {...register('postalCode', postalCodeOptions)}
                  placeholder="Postal code (M2K0N5)"
                />
                <span className="text-red-600 m-0 sm:ml-2">
                  {errors.postalCode?.message}
                </span>
              </div>
            </section>
          </div>
        </article>

        <Button
          customStyle={
            'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-[120px]'
          }
          text={'Save'}
          onClick={onclick}
          type="submit"
        />

        <Link to="/favorite-pokemon">
          {/* TOOD: either store the state or capture the register */}
          <button
            className={
              !isSubmitSuccessful
                ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-red-700 ml-2 disabled:opacity-30'
                : 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'
            }
            disabled={!isSubmitSuccessful}
          >
            Continue
          </button>
        </Link>
      </form>
    </section>
  );
}
