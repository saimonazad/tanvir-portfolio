module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        navbar: "#343434",
        animationTitle: "#326AFF",
        heroTitle: "#2D3038",
        aboutTitle: "#47484D",
        aboutSubtitle: "#373737",
        aboutDescription: "#6F6F6F",
        milestoneList: '#6C6C6F',
        bodyBg: '#F6F6F6',
        itemone: '#FBEE6F',
        itemtwo: '#F77C70',
        itemthree: '#326AFF',
        itemfour: '#7BC7A0',
        itemfive: '#73479E',
        itemsix: '#343434',
      },
     
      borderRadius:{
        aboutBorderRadius: '30px'
      },
      margin:{
        "40%":"20%"
      },
      fontFamily: {
        Sacramento: ['Sacramento', 'cursive'],
        Montserrat: ['Montserrat', 'sans-serif'],
        // Impact: ['Maximum Impact', 'sans-serif'],
        PT_Serif: ['PT Serif', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Open_Sans: ['Open Sans', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        impact: ['impact', 'sans-serif'],
        Encode_Sans: ['Encode Sans', 'sans-serif'],
       },
       spacing: {
        'custom': '140%',
        'about': '25%',
      },
      inset: {
        '10%': '10%',
        '2%': '2%',
        '4%': '4%',
        '5%': '5%',
        '85%': '85%',
        '75%': '75%',
        '60%': '60%',
        '40%': '40%',
        '6%': '7%',
        '20%': '20%',
        '30%': '30%',
        '85%': '85%',
      },
      maxHeight: {
        '1/2': '50%',
      }
    },
  },
  plugins: [],
}