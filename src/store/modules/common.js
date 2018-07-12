import * as types from '../mutationTypes'
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
    document.getElementById('audio').play()
    commit(types.CHANGE_MUSIC_STATE,true)
 },
 pauseMusic({commit,state},params){
    document.getElementById('audio').pause()
    commit(types.CHANGE_MUSIC_STATE,false)
 }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
