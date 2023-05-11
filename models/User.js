const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,          // sparkl hae@naver.com라고 입력하면 sparklhae@naver.com 처럼 여백 없애줌
        unique: 1            // 중복 불가능
    },
    passwork: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role : {                // role : 사용자가 관리자, 일반 유저 등 다양한 역할이 될 수 있음 (카페지기, 일반회원 등)
        type: Number,
        default: 0          // 0: 일반 유저, 1: 관리자 
    },
    image: String,
    token: {
        type:String
    },
    tokenExp: {             // token의 유효기간
        type: Number
    }
})

// 위에 작성한 스키마를 모델로 감싸줌
const User = mongoose.model('User', userSchema)

module.exports = { User }