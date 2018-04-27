import { LunarCalendar } from './lunarcalendar'

let sky = '甲乙丙丁戊己庚辛壬癸'
let earth = '子丑寅卯辰巳午未申酉戌亥'
let month = '正二三四五六七八九十冬腊'
let day = '初十廿'
let number = '一二三四五六七八九十'

class LunarDate {
  constructor(year, month, day, hour, isleap) {
    this.lunarYear = year
    this.year = (this.lunarYear - 1864) % 60 + 1;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.isleap = isleap || false;
  }

  yearLunarValue() {
    let yearSky = (this.year - 1) % 10
    let yearEarth = (this.year - 1) % 12
    return [yearSky, yearEarth]
  }

  toString() {
    let [ys,ye] = this.yearLunarValue()
    let m = month[this.month - 1]
    let d = this.day % 10
    let h = parseInt(this.day / 10)

    let dayString = d === 0  ?  (h === 1 ? day[h-1] + day[h] : number[h-1] + '十') : day[h] + number[d - 1]
    return sky[ys] + earth[ye] + "年" + m + "月" + dayString
  }
}

export { LunarDate }