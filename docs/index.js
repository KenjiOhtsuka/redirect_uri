import {computed} from "./vue.global";

Vue.createApp({
    setup(props, context) {
        const methods = {
            sanitize: (value) => {
                if (!value) return ''
                const replacement = {
                    '<': '&lt;',
                    '>': '&gt;',
                    '&': '&amp;',
                    '"': '&quot;',
                    "'": '&#039;',
                }
                for (const [key, val] of Object.entries(replacement)) {
                    value = value.replaceAll(key, val)
                }
                return value
            },
            parseUrl: (text) => {
                const url = new URL(text)

                return {
                    url: text,
                    protocol: url.protocol,
                    host: url.host.replace(/:.*$/, ''),
                    port: url.port.replace(/:.*$/, ''),
                    path: url.pathname,
                    query_parameters: url.searchParams
                }
            }
        }


        const data = Vue.reactive({
            query_parameters: {},
            url: computed(() => {
                return methods.parseUrl(data.input_url)
            }),
            input_url: window.location.href,
        })
        const urlParts = Vue.computed(() => {
            return methods.parseUrl(data.input_url)
        })
        // Vue.onMounted(() => {
        //     // set up query parameters
        //     const params = new URLSearchParams(window.location.search)
        //     // sort keys alphabetically
        //     const keys = [...params.keys()].sort()
        //     const query_parameters = {}
        //     for (const key of keys) {
        //         query_parameters[key] = methods.sanitize(params.get(key))
        //     }
        //     data.query_parameters = query_parameters
        //
        //     // set up url
        //     data.url = methods.parseUrl(window.location.href)
        //     console.log(data.url)
        // })

        return {
            data, methods, toRef(urlParts)
        }
    }
}).mount('#app')
