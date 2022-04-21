export default {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    boxSizing: 'border-box',
  },
  content: {
    width: '50%',
    minWidth: 300,
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    marginBottom: 50,
  },
  title: {
    marginBottom: 5,
  },
  row: {
    width: '100%',
    margin: (theme) => theme.spacing(20, 0),
  },
  submit: {
    width: 'fit-content',
  },
  book: {
    marginBottom: 10,
  },
};
