import 'babel-polyfill'
import assert from 'assert'
import { LunarCalendar } from '../src/lunarcalendar'

describe("Lunar Calendar Convert", ()=> {
	let calendar = new LunarCalendar()
	it("convert date to lunar", ()=> {
		let d = new Date(2017,1,19)
		let lunarDate = calendar.convertToLunar(d)
		assert.equal(lunarDate.toString(), "丁酉年正月廿三")
	})
	it("convert date to lunar (before springfesteval)", ()=> {
		let d = new Date(2017,0,27)
		let lunarDate = calendar.convertToLunar(d)
		assert.equal(lunarDate.toString(), "丙申年腊月三十")
	})
	it("convert date to lunar (leap month)", ()=> {
		let d = new Date(1984,11,21)
		let lunarDate = calendar.convertToLunar(d)
		assert.equal(lunarDate.toString(), "甲子年十月廿九")
		assert.equal(lunarDate.isleap, true)
	})
	it("convert date to lunar (before 1984)", ()=> {
		let d = new Date(1983,1,21)
		let lunarDate = calendar.convertToLunar(d)
		assert.equal(lunarDate.toString(), "癸亥年正月初九")
	})
	it("convert date to lunar (after 2044)", ()=> {
		let d = new Date(2044,1,8)
		let lunarDate = calendar.convertToLunar(d)
		assert.equal(lunarDate.toString(), "甲子年正月初十")
	})
	it("get solar date", ()=> {
		let solar = calendar.getSolarTerm(2017,2)
		assert.equal(solar.getFullYear(), 2017)
		assert.equal(solar.getMonth() + 1, 2)
		assert.equal(solar.getDate(), 3)
		assert.equal(solar.getHours(), 21)
		assert.equal(solar.getMinutes(), 57)
	})
	it("pre solar term", ()=> {
		let d1 = new Date(2017,1, 6)
		let term = calendar.preSolarTerm(d1)
		assert.equal(term, 2)
		let d2 = new Date(2017,1, 29)
		term = calendar.preSolarTerm(d2)
		assert.equal(term, 3)
	})
})