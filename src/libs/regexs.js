export const phoneRegex = {rule:/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/,msg:'手机号码格式不正确'}
export const passwordRegex = {rule:/^(\w){6,18}$/,msg:'密码应为6-18由数字或大小写英文字母或下划线组成的字符串'}
export const accountRegex = {rule:/^(\w){4,18}$/,msg:'账号应为6-18由数字或大小写英文字母或下划线组成的字符串'}
export const emailRegex = {rule:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,msg:'邮箱格式不正确'}
export const iviewValidator = (rule, value, callback, regex) => {
    if(!value || !regex.rule.test(value)){
        callback(new Error(regex.msg))
        return
    }
    callback()
}