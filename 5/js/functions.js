// eslint-disable-next-line no-unused-vars
function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}

// eslint-disable-next-line no-unused-vars
function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
}

const getMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return Number(hours) * 60 + Number(minutes);
};

// eslint-disable-next-line no-unused-vars
const isMeetingInWorkday = (startWork, endWork, startMeeting, duration) => {
  const startWorkMinutes = getMinutes(startWork);
  const endWorkMinutes = getMinutes(endWork);
  const startMeetingMinutes = getMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + duration;

  return startMeetingMinutes >= startWorkMinutes && endMeetingMinutes <= endWorkMinutes;
};
