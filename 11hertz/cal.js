const WEEKS = '일월화수목금토';

export function cal(ym) {
  let ret = '';

  // 이 부분을 완성하시오.
  const yearMonth = ym.split('-');
  const y = yearMonth[0];
  const m = +yearMonth[1];

  let startDay = new Date(y, m - 1, 1).getDay();
  const endDate = new Date(y, m, 0).getDate();

  let count = 0;
  while (count <= endDate) {
    let line = '';
    for (let j = 0; j < 7; j++) {
      if (count === endDate) break;
      if (j < startDay) line += '   ';
      else {
        count += 1;
        line += count.toString().padStart(2, ' ') + ' ';
      }
    }
    ret += line + '\n';
    if (count === endDate) break;
    startDay = 0;
  }

  console.log(`${m}월 ${y}`.padStart(21 / 2 + 4, ' '));
  console.log([...WEEKS].map((w) => w.padStart(2, ' ')).join(''));
  console.log(ret);
}
