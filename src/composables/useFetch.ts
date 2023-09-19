import {ref, watchEffect, toValue, Ref} from 'vue'

export function useFetch(url: string | Ref<string>) {
    const data = ref(null)
    const error = ref(null)
    const refetch = () => fetch(toValue(url))
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))

    watchEffect(() => {
        data.value = null
        error.value = null
        refetch()
    })

    return { data, error, refetch }
}
