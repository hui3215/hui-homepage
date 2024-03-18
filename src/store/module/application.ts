import yaml from 'js-yaml'

interface UserInfo {
  avatar: String,
  userName: String,
  email: String,
  phone: String,
  birthday: String,
  description: String,
  account: Account[],
  skills: Skill[],
  skillCustomColors: SkillCustomColor[],
  experiences: Experience[],
  projectsInfo: Project[],
  introduction: Introduction[]
}

interface WebSite {
  title: String,
  ICPRecordNumber: String,
  backgroundWords: String[]
}

interface Config {
  userInfo: UserInfo,
  website: WebSite
}

interface Account {
  name: String,
  icon: String,
  url?: String,
  copy?: String
}

interface Skill {
  skill: String,
  percentage: Number
}

interface SkillCustomColor {
  color: String,
  percentage: Number
}

interface Experience {
  content: String,
  timestamp: String,
  size?: String,
  type?: String,
  hollow?: Boolean,
}

interface Project {
  name: String,
  url: String,
  skills: String[],
  description: String
}

interface Introduction {
  content: String,
  keywords: String[]
}

function loadFile(name: string) {
  const xhr = new XMLHttpRequest()
  const okStatus = document.location.protocol === 'file:' ? 0 : 200
  xhr.open('GET', name, false)
  xhr.overrideMimeType('text/html;charset=utf-8') // 默认为utf-8
  xhr.send(null)
  return xhr.status === okStatus ? xhr.responseText : null
}


function getConfig(): Config {
  const file = loadFile('./application.yml') as string
  return yaml.load(file) as Config
}

const state = {
  config: getConfig()
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}