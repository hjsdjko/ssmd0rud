const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmd0rud/",
            name: "ssmd0rud",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmd0rud/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "童装商城小程序"
        } 
    }
}
export default base
