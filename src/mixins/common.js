import dayjs from 'dayjs'
export default{
    data(){
        return {
            gp:{ //gobal params
               loading:false,
               _false:false,
               _true:true
            }
        }
    },
    methods: {
        loading(content,duration=0){
            this.gp.loading = true
            this.$Message.loading({duration: duration,content: content})
        },
        closeLoading(close=true){
            this.gp.loading = false
            if(close){
                this.$Message.destroy()
            }
        },
        openUrl(url,targer='_blank'){
            window.open(url, targer).location;
        },
        dateFormat(date,format='YYYY年MM月DD日 HH:mm:ss'){
            return dayjs(date).format(format)
        },
        notBlank(s){
            return s && s.trim()!=''
        },
        copy(jsonObject){
            return JSON.parse(JSON.stringify(jsonObject))
        }
    },
}