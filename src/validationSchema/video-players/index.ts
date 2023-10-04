import * as yup from 'yup';

export const videoPlayerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  code: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
