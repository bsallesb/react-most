/* eslint-disable react/jsx-props-no-spreading */
import { memo, useCallback, useState } from 'react';

import { Button, Form, Row, Col } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import IntlTelInput from 'react-intl-tel-input';
import { useNavigate } from 'react-router-dom';
import 'react-intl-tel-input/dist/main.css';

import useCountries from 'hooks/useCountries';

import { PriceInfoFormDataType } from 'types/information';

const defaultFormValues = {
  name: '',
  email: '',
  phone: '',
  country: 'Brasil',
  message: '',
  privacyPolicy: '',
};

const RECAPTCHA_API_KEY = import.meta.env.VITE_RECAPTCHA_API_KEY;

const ContactForm: React.FC = () => {
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  const { register, handleSubmit, reset } = useForm<PriceInfoFormDataType>({
    defaultValues: defaultFormValues,
  });

  const navigateTo = useNavigate();

  const countries = useCountries();

  const onFormSubmit = useCallback(() => {
    navigateTo('/obrigado');
    reset(defaultFormValues);
  }, [navigateTo, reset]);

  const handleCaptchaChange = useCallback((value: string | null) => {
    setIsSubmitButtonDisabled(!value);
  }, []);

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)} className="px-5">
      <Row className="row-cols-1 row-cols-md-2 mb-3 g-3">
        <Col>
          <Form.Group>
            <Form.Label className="text-white">Nome</Form.Label>
            <Form.Control type="text" required {...register('name')} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="text-white">E-mail</Form.Label>
            <Form.Control type="email" required {...register('email')} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="text-white">Telefone</Form.Label>
            <IntlTelInput
              containerClassName="intl-tel-input d-block"
              inputClassName="form-control"
              preferredCountries={['br']}
              defaultCountry="br"
              {...register('phone')}
              separateDialCode
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="text-white">País</Form.Label>
            <Form.Select required {...register('country')}>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label className="text-white">Mensagem</Form.Label>
        <Form.Control as="textarea" rows={3} {...register('message')} />
      </Form.Group>
      <Form.Group className="py-3 mb-3 d-flex justify-content-center">
        <ReCAPTCHA sitekey={RECAPTCHA_API_KEY} onChange={handleCaptchaChange} />
      </Form.Group>
      <Form.Group className="text-center">
        <Button
          disabled={isSubmitButtonDisabled}
          type="submit"
          variant="success"
          className="px-5"
        >
          Enviar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default memo(ContactForm);
