export default {
  root: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: (theme) => theme.palette.white,
    display: 'flex',
    border: (theme) => `${theme.spacing(1)} solid ${theme.palette.neutral.main}`,
    boxSizing: 'border-box',
  },
  image: {
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    padding: 10,
  },
};
