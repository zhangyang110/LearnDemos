import Mock from 'mockjs';
export default {
    //首页数据
    home:function(){
        var ret= {"card":{'user_name':Mock.Random.cname(),'his_card_num':Mock.Random.natural(10000)}};
        return ret;
    },
    //获取用户已绑定的就诊卡
    getAllCard:function(){
        var ret = {card_list:[]};
        var is_default = 1;
        var time = parseInt((new Date()).getTime()/1000);
        for (var i=1;i<5;i++) {
            if(i == 2){
                is_default = 2;
            }else{
                is_default = 1;
            }
            ret.card_list.push(Mock.mock({
                card_id:i,
                user_name:Mock.Random.cname(),
                his_card_num:Mock.Random.natural(10000),
                user_identify_num:Mock.Random.natural(10000),
                is_default:is_default,
                create_time:time,
                user_birthday:Mock.Random.date(),
                'user_mobile':/^1[3|4|5|6|7|8|9]\d{9}$/,
                'user_sex|1':[1,2],
                user_address:Mock.Random.province(),
                user_area:'区县乡镇',
                user_area_code:'区县乡镇code'
            }));
        }
        return ret;
    },
}