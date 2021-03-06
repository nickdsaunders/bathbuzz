const Theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    darker: '#121217',
    dark: '#17171d',
    darkless: '#252429',
    black: '#1f2d3d',
    steel: '#273444',
    slate: '#3c4858',
    muted: '#8492a6',
    smoke: '#e0e6ed',
    snow: '#f9fafc',
    white: '#ffffff',
    red: '#ec3750',
    pink: '#FFA8E2',
    orange: '#ff8c37',
    yellow: '#f1c40f',
    green: '#33d6a6',
    cyan: '#5bc0de',
    blue: '#338eda',
    purple: '#a633d6',
    twitter: '#1da1f2',
    facebook: '#3b5998',
    instagram: '#e1306c',
    text: '#1f2d3d',
    background: '#ffffff',
    elevated: '#ffffff',
    sheet: '#f9fafc',
    sunken: '#e0e6ed',
    border: '#e0e6ed',
    placeholder: '#8492a6',
    secondary: '#3c4858',
    primary: '#ec3750',
    accent: '#338eda'
  },
  fonts: {
    body: 'Phantom Sans',
    heading: 'Phantom Sans',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700
  },
  letterSpacings: {
    title: '-0.009em',
    headline: '0.009em'
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25
  },
  text: {
    heading: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      mt: 0,
      mb: 0
    },
    ultratitle: {
      fontSize: [5, 6, 7],
      lineHeight: 'limit',
      fontWeight: 'bold',
      letterSpacing: 'title'
    },
    title: {
      fontSize: [4, 5, 6],
      fontWeight: 'bold',
      letterSpacing: 'title',
      lineHeight: 'title'
    },
    subtitle: {
      fontSize: [2, 3],
      fontWeight: 'body',
      letterSpacing: 'headline',
      lineHeight: 'subheading'
    },
    body: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    }
  },
  sizes: {
    widePlus: 2048,
    wide: 1536,
    layoutPlus: 1200,
    layout: 1024,
    copyUltra: 980,
    copyPlus: 768,
    copy: 680,
    narrowPlus: 600,
    narrow: 512
  },
  radii: {
    small: 4,
    default: 8,
    extra: 12,
    ultra: 16,
    circle: 99999
  },
  shadows: {
    text: '0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)',
    small: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)',
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    elevated: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)'
  },

  images: {
    hero: {
      margin: 'auto',
      objectFit: 'contain',
      objectPosition: 'center',
      width: ['100%', '65%'],
      position: 'relative'
    }
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      bg: 'blue',
      color: 'white',
      ':hover': {
        opacity: '50%'
      }
    },
    icon: {
      fill: 'white',
      cursor: 'pointer',
      height: 40,
      width: 40
    },
    close: {
      color: 'black',
      cursor: 'pointer'
    },
    secondary: {
      cursor: 'pointer',
      bg: '#FF38BD',
      color: 'white',
      ':hover': {
        opacity: '50%'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    }
  },
  layout: {
    box: {
      drawerBackdrop: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        bg: '#00000090',
        zIndex: 1
      }
    },
    flex: {
      drawer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        bg: 'elevated',
        boxShadow: 'card',
        position: 'fixed',
        top: 0,
        right: 0,
        width: '70%',
        maxWidth: '400px',
        zIndex: 2,
        transform: 'translateX(+100%)',
        transition: 'transform 0.3s ease-out'
      },
      drawerOpen: {
        variant: 'layout.flex.drawer',
        transform: 'translateX(0)'
      },
      drawerLeft: {
        variant: 'layout.flex.drawer',
        left: 0,
        transform: 'translateX(-100%)'
      },
      drawerLeftOpen: {
        variant: 'layout.flex.drawerLeft',
        transform: 'translateX(0)'
      },
      drawerHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        mb: 2,
        bg: 'purple',
        p: 3,
        color: 'white',
        boxShadow: 'text'
      },
      cartItems: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      },
      centerColumn: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }
    }
  },
  cards: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: 3,
      // borderRadius: 'extra',
      // boxShadow: 'card',
      overflow: 'hidden',
      textDecoration: 'none'
    },
    sunken: {
      bg: 'sunken',
      p: [3, 4],
      borderRadius: 'extra'
    },
    interactive: {
      variant: 'cards.primary',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)',
        boxShadow: 'elevated'
      }
    }
  }
};

export default Theme;
