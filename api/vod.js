import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: `/eduvdo/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  }

}
