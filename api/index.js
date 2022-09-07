import request from '@/utils/request'

export default {
  //查询热门课程和讲师
  getListBanner() {
    return request({
      url: `/edufront/indexfront/index`,
      method: 'get'
    })
  },
  //查询讲师信息方法
  getTeacherList(page,limit) {
    return request({
      url: `/edufront/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  //根据讲师id查询详情
  getTeacherInfo(id) {
    return request({
      url: `/edufront/teacherfront/getTeacherFrontInfo/${id}`,
      method: 'get'
    })
  }

}
