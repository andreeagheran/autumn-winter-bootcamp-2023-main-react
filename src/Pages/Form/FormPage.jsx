import React, { useEffect, useState } from "react";
import { Field, Formik } from 'formik';
import { ButtonWrapper, ErrorWrapper, FieldError, FieldRow, FieldWrapper, FormContainer, FormSubTitle, InputField, InputLabel, PageContainer, PageTitle } from "./style";
import axios from "axios";
import Dropdown from "../../Components/DropdownField/DropdownField";
import Button from "../../Components/Button/Button";
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  country: Yup.string()
    .required('Required'),
  city: Yup.string()
    .required('Required'),
  phone: Yup.string()
    .required('Required')
    .test('len', 'Must be exactly 10 digits', val => val.length === 10),
  addr1: Yup.string().required('Required'),
});

const FormPage = () => {
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [citiesOption, setCitiesOption] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
      const countryData = response.data.data.map(data => data.country);
      const cityData = response.data.data.map(data => {
        const countriesAndCities = {
          country: data?.country,
          cities: data?.cities
        }
        return countriesAndCities
      });
      setCountries(countryData);
      setCities(cityData);
    }
    getCountries()
  }, [])

  const handleSubmit = (formData) => {
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.pathname = '/submission-page'
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        addr1: '',
        addr2: '',
        country: '',
        state: '',
        city: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue
      }) => {
        const onCountryChange = async (country) => {
          const response = await axios.post('https://countriesnow.space/api/v0.1/countries/states', {
            country
          });
          setFieldValue('state', '')
          setFieldValue('city', '')
          setStates(response.data.data.states.map(state => state.name));
        }
        const onStateChange = async (state) => {
          const response = await axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', {
            country: values.country,
            state,
          });
          setFieldValue('city', '')
          setCitiesOption(response.data.data);
        }

        const citiesByState = cities?.filter(x => x.country === values.country)[0]?.cities;

        return (
          <PageContainer>
            <PageTitle>Application Form</PageTitle>
            <FormContainer>
              <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                <FormSubTitle>Contact Information</FormSubTitle>
                <FieldRow>
                  <FieldWrapper>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <InputField
                      id="firstName"
                      name="firstName"
                      type="phone"
                      onChange={handleChange}
                      value={values.firstName}
                      required
                    />
                    <ErrorWrapper>
                      <FieldError>{errors.firstName}</FieldError>
                    </ErrorWrapper>
                  </FieldWrapper>
                  <FieldWrapper>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <InputField
                      id="lastName"
                      name="lastName"
                      type="lastName"
                      onChange={handleChange}
                      value={values.lastName}
                      required
                    />
                    <ErrorWrapper>
                      <FieldError>{errors.lastName}</FieldError>
                    </ErrorWrapper>
                  </FieldWrapper>
                </FieldRow>
                <FieldRow>
                  <FieldWrapper>
                    <InputLabel htmlFor="phone">Phone Number</InputLabel>
                    <InputField
                      id="phone"
                      name="phone"
                      type="text"
                      onChange={handleChange}
                      value={values.phone}
                      required
                    />
                    <ErrorWrapper>
                      <FieldError>{errors.phone}</FieldError>
                    </ErrorWrapper>
                  </FieldWrapper>
                  <FieldWrapper>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <InputField
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={values.email}
                      required
                    />
                    <ErrorWrapper>
                      <FieldError>{errors.email}</FieldError>
                    </ErrorWrapper>
                  </FieldWrapper>
                </FieldRow>
                <FormSubTitle>Address</FormSubTitle>
                <FieldRow>
                  <FieldWrapper>
                    <InputLabel htmlFor="addr1">Address Line 1</InputLabel>
                    <InputField
                      id="addr1"
                      name="addr1"
                      type="text"
                      onChange={handleChange}
                      value={values.addr1}
                      required
                    />
                    <ErrorWrapper>
                      <FieldError>{errors.addr1}</FieldError>
                    </ErrorWrapper>
                  </FieldWrapper>
                </FieldRow>
                <FieldRow>
                  <FieldWrapper>
                    <InputLabel htmlFor="addr2">Address Line 2</InputLabel>
                    <InputField
                      id="addr2"
                      name="addr2"
                      type="text"
                      onChange={handleChange}
                      value={values.addr2}
                    />
                    <ErrorWrapper>
                      <FieldError>{errors.addr2}</FieldError>
                    </ErrorWrapper>
                  </FieldWrapper>
                </FieldRow>
                <FieldRow>
                  <FieldWrapper>
                    <InputLabel htmlFor="country">Country</InputLabel>
                    <Field
                      id="country"
                      name="country"
                      component={Dropdown}
                      onChange={onCountryChange}
                      value={values.country}
                      required
                      options={countries}
                    />
                    <ErrorWrapper>
                      <FieldError>{errors.country}</FieldError>
                    </ErrorWrapper>
                  </FieldWrapper>
                  <FieldWrapper>
                    <InputLabel htmlFor="state">State</InputLabel>
                    <Field
                      id="state"
                      name="state"
                      component={Dropdown}
                      onChange={onStateChange}
                      value={values.state}
                      options={states}
                      disabled={!values.country}
                      errorMessage="Please select a country first."
                      defaultMessage="No states available."
                    />
                    <ErrorWrapper>
                      <FieldError>{errors.state}</FieldError>
                    </ErrorWrapper>
                  </FieldWrapper>
                  <FieldWrapper>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <Field
                      id="city"
                      name="city"
                      component={Dropdown}
                      onChange={handleChange}
                      value={values.city}
                      required
                      options={values.state ? citiesOption : citiesByState}
                      disabled={!values.country}
                      errorMessage="Please select a country first."
                      defaultMessage="No cities available."
                    />
                    <ErrorWrapper>
                      <FieldError>{errors.city}</FieldError>
                    </ErrorWrapper>
                  </FieldWrapper>
                </FieldRow>
                <ButtonWrapper>
                  <Button shadow>Join Us</Button>
                </ButtonWrapper>
              </form>
            </FormContainer>
          </PageContainer>
        )
      }}
    </Formik>
  )
}

export default FormPage;