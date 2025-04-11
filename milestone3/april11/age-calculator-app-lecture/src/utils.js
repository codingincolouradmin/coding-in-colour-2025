/**
 * Checks if any date input is empty, returns true if empty
 * @param {object} date
 * @param {string} dateLabel
 * @returns {boolean}
 */
export function checkEmptyInput(date, dateLabel) {
  return date[dateLabel] === ''
}

/**
 * Checks if any date input is valid, returns message if invalid, empty string if valid
 * @param {object} date 
 * @param {string} dateLabel 
 * @returns {string}
 */
export function checkValidInput(date, dateLabel) {
  if (dateLabel === 'day') {
    const dayVal = Number(date[dateLabel])
    if (isNaN(dayVal) || dayVal < 1 || dayVal > 31) {
      return 'Must be a valid day'
    }
  }

  if (dateLabel === 'month') {
    const monthVal = Number(date[dateLabel])
    if (isNaN(monthVal) || monthVal < 1 || monthVal > 12) {
      return 'Must be a valid month'
    }
  }

  if (dateLabel === 'year') {
    const yearVal = Number(date[dateLabel])
    if (isNaN(yearVal) || yearVal < 1 || yearVal > 2023) {
      return 'Must be in the past'
    }
  }

  return '';
}

/**
 * Checks if a given date is valid by creating a Date object and comparing the values (ChatGPT reference)
 * @param {object} date 
 * @returns {boolean}
 */
export function isValidDate(date) {
  const yearVal = Number(date.year)
  const monthVal = Number(date.month)
  const dayVal = Number(date.day)
  const dateObj = new Date(yearVal, monthVal - 1, dayVal); // month is 0-indexed in JavaScript Date
  return (
    dateObj.getFullYear() === yearVal &&
    dateObj.getMonth() === (monthVal - 1) &&
    dateObj.getDate() === dayVal
  );
}

/**
 * Returns the difference between two dates (ChatGPT reference)
 * @param {Date} startDate 
 * @param {Date} endDate 
 * @returns {object}
 */
export function calculateDifference(startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);

  // Calculate the difference in total years
  let years = end.getFullYear() - start.getFullYear();

  // Adjust for the months
  let months = end.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust for the days
  let days = end.getDate() - start.getDate();
  if (days < 0) {
    months--;
    if (months < 0) {
      years--;
      months += 11;
    }
    let previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += previousMonth.getDate();
  }

  return { days, months, years };
}
