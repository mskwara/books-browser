import * as Yup from 'yup';

export default (t) =>
  Yup.object({
    title: Yup.string().required(t('fieldRequired')),
  });
