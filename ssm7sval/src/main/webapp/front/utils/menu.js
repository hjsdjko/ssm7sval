const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"树木","menuJump":"列表","tableName":"shumu"}],"menu":"树木管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"所属科","menuJump":"列表","tableName":"suoshuke"}],"menu":"所属科管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"树木领取","menuJump":"列表","tableName":"shumulingqu"}],"menu":"树木领取管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"树跟踪状态","menuJump":"列表","tableName":"shugenzongzhuangtai"}],"menu":"树跟踪状态管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户信息统计","menuJump":"列表","tableName":"yonghuxinxitongji"}],"menu":"用户信息统计管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"树木捐款","menuJump":"列表","tableName":"shumujuankuan"}],"menu":"树木捐款管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"校友林交流","tableName":"forum"}],"menu":"校友林交流"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"联系管理员","tableName":"chat"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","树木领取"],"menu":"树木列表","menuJump":"列表","tableName":"shumu"}],"menu":"树木模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","树木领取"],"menu":"树木","menuJump":"列表","tableName":"shumu"}],"menu":"树木管理"},{"child":[{"buttons":["查看"],"menu":"树木领取","menuJump":"列表","tableName":"shumulingqu"}],"menu":"树木领取管理"},{"child":[{"buttons":["查看","新增","修改","删除","查看评论"],"menu":"树跟踪状态","menuJump":"列表","tableName":"shugenzongzhuangtai"}],"menu":"树跟踪状态管理"},{"child":[{"buttons":["查看","支付"],"menu":"树木捐款","menuJump":"列表","tableName":"shumujuankuan"}],"menu":"树木捐款管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","树木领取"],"menu":"树木列表","menuJump":"列表","tableName":"shumu"}],"menu":"树木模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;