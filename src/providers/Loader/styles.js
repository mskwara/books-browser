export default {
  screenOverlay: {
    zIndex: 999,
    width: '100vw',
    height: '100vh',
    backgroundColor: (theme) => theme.palette.overlay,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
  },
};
