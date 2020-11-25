const carouselImages = [
  {
    id: 0,
    src: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
  },
  {
    id: 1,
    src: "https://bipbap.ru/wp-content/uploads/2017/08/LEpwl8j7fQ.jpg",
  },
  {
    id: 2,
    src:
      "https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg",
  },
  {
    id: 3,
    src: "https://klike.net/uploads/posts/2019-06/1560664221_1.jpg",
  },
  {
    id: 4,
    src: "https://i.ytimg.com/vi/xkxdlkYi838/hqdefault.jpg",
  },
];

export default {
  ru: {
    toptitle: "Добро пожаловать в AntHouse",
    topdescript: "Давно выяснено, что при оценке дизайна есть читаемый текст.",
    lang: "ru",
    features: {
      title: "Наши особенности",
      underTitleText: "Создавайте функции для ваших нужд",
      first: [
        {
          imgUrl: "images/home/web-design.png",
          title: "Веб Дизайн",
          text:
            "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.",
        },
        {
          imgUrl: "images/home/development.png",
          title: "Разработка",
          text:
            "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.",
        },
        {
          imgUrl: "images/home/logodesign.png",
          title: "Дизайн Приложения",
          text:
            "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.",
        },
        {
          imgUrl: "images/home/support.png",
          title: "Поддержка",
          text:
            "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.",
        },
      ],
    },
    ourprojects: {
      title: "Наши проекты",
      underTitleText: "Посмотрите, над чем мы работали!",
      carouselImages,
    },
    bottomData: {
      title: "Хотите узнать больше?",
      underlineText: "Спрашивайте что угодно",
      text:
        "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное?",
      btnText: "Связаться с нами",
    },
  },
  en: {
    toptitle: "Welcome to AntHouse",
    topdescript: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    lang: "en",
    features: {
      title: "Our features",
      underTitleText: "Create features for your needs",
      first: [
        {
          imgUrl: "images/home/web-design.png",
          title: "Web Design",
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, velitexpedita.",
        },
        {
          imgUrl: "images/home/development.png",
          title: "Development",
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, velitexpedita.",
        },
        {
          imgUrl: "images/home/appdesign.png",
          title: "AppDesign",
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, velitexpedita.",
        },
        {
          imgUrl: "images/home/support.png",
          title: "Support",
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, velitexpedita.",
        },
      ],
    },
    ourprojects: {
      title: "Our projects",
      underTitleText: "Look what we had been working on!",
      carouselImages,
    },
    bottomData: {
      title: "WANT TO LEARN MORE?",
      underlineText: "Just ask us anything",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur a impedit, alias dolorum assumenda quaerat delectus necessitatibus qui ullam?",
      btnText: "Contact us",
    },
  },
};
