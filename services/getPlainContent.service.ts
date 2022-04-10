// import axios from "axios"

// const apiURL = "https://ratherlabs-challenges.s3.sa-east-1.amazonaws.com/survey-sample.json"

const getPlainContent = async () => {
    // const axiosHeader = {
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // }
    // const res = await axios.get(apiURL, axiosHeader)
    const res = {
        "title": "Sample Survey",
        "image": "https://48tools.com/wp-content/uploads/2015/09/shortlink.png",
        "questions": [
          {
            "text": "Question1",
            "image": "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
            "lifetimeSeconds": 10,
            "options": [
              {
                "text": "Opt1"
              },
              {
                "text": "Opt2"
              },
              {
                "text": "Opt"
              }
            ]
          },
          {
            "text": "Question2",
            "image": "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
            "lifetimeSeconds": 5,
            "options": [
              {
                "text": "Opt1"
              },
              {
                "text": "Opt2"
              },
              {
                "text": "Opt"
              }
            ]
          },
          {
            "text": "Pregunta 2",
            "image": "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
            "lifetimeSeconds": 5,
            "options": [
              {
                "text": "Opt1"
              },
              {
                "text": "Opt2"
              },
              {
                "text": "Opt"
              }
            ]
          }
        ]
      }
    return res
}

export default getPlainContent