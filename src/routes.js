import Film from './components/Film'
import FilmDetail from './components/FilmDetail'

export default [
    { path: '/', component: Film },
    { path: '/episode/:id', component: FilmDetail },
]