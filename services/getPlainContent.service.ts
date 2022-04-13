const getPlainContent = () => {
  const res = {
    title: "Sample Survey",
    image: "https://48tools.com/wp-content/uploads/2015/09/shortlink.png",
    questions: [
      {
        text: "What is the color of this fruit?",
        image:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        lifetimeSeconds: 6,
        id: 100,
        options: [
          {
            text: "Orange",
            value: true,
            id: 1,
          },
          {
            text: "Green",
            value: false,
            id: 2,
          },
          {
            text: "Blue",
            value: false,
            id: 3,
          },
        ],
      },
      {
        text: "What is the capital of turkey?",
        image:
          "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
        lifetimeSeconds: 6,
        id: 101,
        options: [
          {
            text: "Kabul",
            value: false,
            id: 4,
          },
          {
            text: "Ankara",
            value: true,
            id: 5,
          },
          {
            text: "Berlín",
            value: false,
            id: 6,
          },
        ],
      },
      {
        text: "What is the world's largest country?",
        image:
          "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
        lifetimeSeconds: 6,
        id: 102,
        options: [
          {
            text: "Russia",
            value: true,
            id: 7,
          },
          {
            text: "Canada",
            value: false,
            id: 8,
          },
          {
            text: "China",
            value: false,
            id: 9,
          },
        ],
      },
    ],
  }
  return res
}

export default getPlainContent
