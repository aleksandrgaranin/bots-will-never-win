import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE: "update-has-next-page"
}
const LOCAL_PROXY = "http://127.0.0.1:8080/"
const AROUND_CORS = 'https://cors-anywhere.herokuapp.com/'
// const BASE_URL = AROUND_CORS + 'https://jobs.github.com/positions.json'
const BASE_URL = LOCAL_PROXY + 'https://jobs.github.com/positions.json'

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return { ...state, hasNextPage: action.payload.hasNextPage }
        default: return state
    }
}


export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })
    useEffect(() => {
        const cancelTokenData = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(BASE_URL, {
            cancelTokenData: cancelTokenData.token,
            params: { markdown: true, page: page, ...params }
        }).then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
        }).catch(err => {
            if (axios.isCancel(err)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: err } })
        })

        const cancelTokenPage = axios.CancelToken.source()
        axios.get(BASE_URL, {
            cancelTokenPage: cancelTokenPage.token,
            params: { markdown: true, page: page + 1, ...params }
        }).then(res => {
            dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } })
        }).catch(err => {
            if (axios.isCancel(err)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: err } })
        })
        return () => {
            cancelTokenData.cancel()
            cancelTokenPage.cancel()
        }
    }, [params, page])
    return state
}