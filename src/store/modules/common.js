import * as types from '../mutationTypes'
import http from 'axios'
let state={
  show_bg_music:true
}
let mutations={
  [types.CHANGE_MUSIC_STATE](state,data){
     state.show_bg_music=data
  }
}
let actions={
  palyMusic({commit,state},params){
   /* document.getElementById('audio').play()
    document.getElementById('audio').pause()
    http.get('/static/bgm/music2.mp3').then(()=>{
      document.getElementById('audio').setAttribute('src', '/static/bgm/music2.mp3')
      document.getElementById('audio').play()
    })*/
    document.getElementById('audio') && document.getElementById('audio').play()
    commit(types.CHANGE_MUSIC_STATE,true)
 },
 pauseMusic({commit,state},params){
   document.getElementById('audio') && document.getElementById('audio').pause()
    commit(types.CHANGE_MUSIC_STATE,false)
 }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
