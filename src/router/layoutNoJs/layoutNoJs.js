import index from './index'
import my from './my'
import notice from './notice'
import registrProtocol from "@/views/layoutNoTab/registrProtocol";

export default [
    ...index,
    ...my,
    ...notice,
    {
        path: 'registrProtocol',
        name: 'registrProtocol',
        component: registrProtocol,
        meta: {
            title: '注册协议'
        }
    }
]
