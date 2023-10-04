import * as yup from 'yup';

export const actionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  video_player_id: yup.string().nullable().required(),
});
