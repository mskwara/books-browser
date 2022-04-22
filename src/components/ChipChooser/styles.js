export default {
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
  },
  label: {
    marginRight: 20,
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 'fit-content',
    minWidth: 50,
    border: (theme) => `${theme.spacing(1)} solid ${theme.palette.neutral.main}`,
    borderRadius: 30,
    backgroundColor: (theme) => theme.palette.white,
    cursor: 'pointer',
    padding: (theme) => theme.spacing(0, 10),
    boxSizing: 'border-box',
    userSelect: 'none',
  },
  selected: {
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.white,
    borderColor: (theme) => theme.palette.primary.main,
  },
};
