import * as Yup from 'yup';

export default (t) =>
  Yup.object({
    title: Yup.string().required(t('fieldRequired')),
    author: Yup.string(),
    language: Yup.string().required(t('fieldRequired')),
  });
