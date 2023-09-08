import { monthDic } from '../hooks/monthDic'

export const getDate = {
    getDay: function () {
        const date = new Date();
        const day = date.getDay()
        return day
    },
    getMonth: function () {
        const date = new Date();
        const month = date.getMonth()
        return monthDic[month + 1]
    }
}