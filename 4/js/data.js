import { getRandomInteger, getRandomArrayElement } from './util.js';

const PHOTOS_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const MESSAGE_PARTS_MIN = 1;
const MESSAGE_PARTS_MAX = 2;

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
  const partsCount = getRandomInteger(MESSAGE_PARTS_MIN, MESSAGE_PARTS_MAX);
  for (let i = 0; i < partsCount; i++) {
    messageParts.push(getRandomArrayElement(MESSAGES));
  }

  return {
    id: commentIdCounter++,
    avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
    message: messageParts.join(' '),
    name: getRandomArrayElement(NAMES),
  };
};

const createComments = () => {
  const count = getRandomInteger(COMMENTS_MIN, COMMENTS_MAX);
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
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: createComments(),
});

export const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};
