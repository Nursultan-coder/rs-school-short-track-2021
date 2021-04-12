/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  let acc;

  domains.forEach((items) => {
    acc = items.split('.').reverse();
    acc[0] = '.'.concat(acc[0]);

    acc.forEach((item, j) => {
      if (acc[j + 1]) {
        acc[j + 1] = item.concat('.', acc[j + 1]);
      }

      if (Object.prototype.hasOwnProperty.call(result, (item))) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    });
  });

  return result;
}

module.exports = getDNSStats;
