const Theme = {
  colors: {
    text: '#000',
    background: '#fff',
    accent: '#555'
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      bg: 'red',
      '&:hover': {
        bg: 'blue'
      }
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted'
    }
  }
};

export default Theme;
