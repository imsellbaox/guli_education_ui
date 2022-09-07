import request from '@/utils/request'

export default {
  //课程条件分页查询
  getCourseList(page,limit,searchObj) {
    return request({
      url: `/edufront/coursefront/getCourseFrontList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  //查询所有分类
  getAllSubject() {
    return request({
      url: `/edufront/coursefront/getAllSubject`,
      method: 'get'
    })
  },
  getCourseInfo(courseId){
    return request({
      url: `/edufront/coursefront/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  },
}
