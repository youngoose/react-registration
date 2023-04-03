import { useForm } from 'react-hook-form';
import { BasicUserInfo } from './BasicForm.model';
import {
  apartmentNumberOptions,
  cityOptions,
  firstNameOptions,
  lastNameOptions,
  phoneNumberOptions,
  postalCodeOptions,
  provinceOptions,
  streetNameOptions,
  streetNumberOptions,
} from '../../register/RegisterOptions';

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BasicUserInfo>({
    mode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      streetName: '',
      streetNumber: '',
      streetDir: '',
      apartmentNumber: '',
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

          const {
            streetNumber,
            streetName,
            streetDir,
            apartmentNumber,
            city,
            province,
            postalCode,
          } = data;

          console.log(streetNumber);

          const street = `${streetNumber} ${streetName} ${streetDir}`;

          const apartment = apartmentNumber ? ` #${apartmentNumber}` : '';
          const cityName = city ? ` ${city}` : '';
          const provinceName = ` ${province} ${postalCode}`;
          const address = street + apartment + cityName + provinceName;

          setValue('address', address);
        })}
      >
        <article>
          <h3>Basic information</h3>

          <section>
            <input
              className="border border-slate-500"
              {...register('firstName', firstNameOptions)}
              type="text"
              name="firstName"
              placeholder="Enter first name"
            />
            <span className="text-red-600">{errors.firstName?.message}</span>

            <input
              className="border border-slate-500"
              {...register('lastName', lastNameOptions)}
              type="text"
              name="lastName"
              placeholder="Enter last name"
            />
            <span className="text-red-600">{errors.lastName?.message}</span>
          </section>

          <section>
            <input
              className="border border-slate-500"
              {...register('phoneNumber', phoneNumberOptions)}
              type="text"
              name="phoneNumber"
              placeholder="Enter phone number"
            />
            <span className="text-red-600">{errors.phoneNumber?.message}</span>
          </section>
        </article>

        <article>
          <h3>Address</h3>

          <section>
            <div>
              <input
                className="border border-slate-500"
                {...register('streetNumber', streetNumberOptions)}
                type="text"
                name="streetNumber"
                placeholder="Street number (eg. 123)"
              />
              <span className="text-red-600">
                {errors.streetNumber?.message}
              </span>

              <input
                className="border border-slate-500"
                {...register('streetName', streetNameOptions)}
                type="text"
                name="streetName"
                placeholder="Street name (eg. Main st)"
              />
              <span className="text-red-600">{errors.streetName?.message}</span>

              <input
                className="border border-slate-500"
                {...register('streetDir', streetNameOptions)}
                type="text"
                name="streetDir"
                placeholder="Street direction (eg. E)"
              />
              <span className="text-red-600">{errors.streetDir?.message}</span>
            </div>

            <div>
              <input
                className="border border-slate-500"
                {...register('apartmentNumber', apartmentNumberOptions)}
                type="text"
                name="apartmentNumber"
                placeholder="Apartment / Unit (optional)"
              />
              <span className="text-red-600">
                {errors.apartmentNumber?.message}
              </span>

              <input
                className="border border-slate-500"
                {...register('city', cityOptions)}
                type="text"
                name="city"
                placeholder="city (optional)"
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
                type="text"
                name="postalCode"
                placeholder="Postal code (eg. M2K0N5 or M2K 0N5)"
              />
              <span className="text-red-600">{errors.postalCode?.message}</span>
            </div>
          </section>
        </article>

        <input type="submit" />
      </form>
    </section>
  );
}
