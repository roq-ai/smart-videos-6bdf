import * as yup from 'yup';

export const clickValidationSchema = yup.object().shape({
  x_coordinate: yup.number().integer().required(),
  y_coordinate: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  video_player_id: yup.string().nullable().required(),
});
