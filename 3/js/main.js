const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const NAMES = [
  'Артём', 'Иван', 'Мария', 'Анна', 'Кекс', 'Елена', 'Дмитрий', 'Ольга', 'Сергей', 'Наталья',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Отдыхаю на природе', 'Закат на море', 'Мой кот спит', 'Вкусный завтрак', 'Прогулка по городу',
];

let commentIdCounter = 1;

const createComment = () => {
  const messageParts = [];
  const partsCount = getRandomInteger(1, 2);
  for (let i = 0; i < partsCount; i++) {
    messageParts.push(getRandomArrayElement(MESSAGES));
  }

  return {
    id: commentIdCounter++,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: messageParts.join(' '),
    name: getRandomArrayElement(NAMES),
  };
};

const createComments = () => {
  const count = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }
  return comments;
};

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};

const similarPhotos = generatePhotos();

// eslint-disable-next-line no-console
console.log(similarPhotos);
