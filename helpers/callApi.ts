/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

interface IRequest{
    url : string,
    data : any | undefined,
    query : Map<any,any> | undefined
}


class CallApi {

    public  baseUrl: string

    private token: string

    constructor (baseUrl: string , token: string){
        this.baseUrl = baseUrl
        this.token = token
    }

    public post = async ({ url , data , query} : IRequest) : Promise<void> => {

        if (!this.token){
            throw new Error('Invalid token')
        }

        return await axios({
            baseURL : this.baseUrl,
            url,
            data,
            params : query ,
            method : 'POST',
            headers : {
                Authorization : "Bearer " + this.token,
                Accept : "application/json" 
            }
        })
    }

    public get = async ({url , query} : IRequest) => {

        if (!this.token){
            throw new Error('Invalid token')
        }

        return await axios({
            baseURL : this.baseUrl,
            url,
            params : query,
            method : 'GET',
            headers : {
                Authorization : "Bearer " + this.token,
                Accept : "application/json" 
            }
        })
    }

    public put = async ({url , query , data} : IRequest) => {

        if (!this.token){
            throw new Error('Invalid token')
        }

        return await axios({
            baseURL : this.baseUrl,
            url,
            data,
            params : query ,
            method : 'PUT',
            headers : {
                Authorization : "Bearer " + this.token,
                Accept : "application/json" 
            }
        })
    }


    public delete = async ({url , query} : IRequest) => {

        if (!this.token){
            throw new Error('Invalid token')
        }

        return await axios({
            baseURL : this.baseUrl,
            url,
            params : query ,
            method : 'DELETE',
            headers : {
                Authorization : "Bearer " + this.token,
                Accept : "application/json" 
            }
        })
    }

}


export default new CallApi(process.env.BASE_URL_BACKEND as string , localStorage.getItem('access_token') as string)