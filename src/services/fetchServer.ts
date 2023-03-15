class AuthenticationError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'AutheticationError';
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }
}

export const fetchServer = async(
    url: string,
    method: 'post' | 'get' | 'put' | 'patch' | 'delete' = 'get',
    data?: any,
    opt: RequestInit = {}       
)=>{
    let serverUrl = `${process.env.REACT_APP_BACKEND_ENDPOINT}/v3.1/${url}`;
    console.log("Hey");     
      // We recieved URL params that we need to parse
      if (data !== null && method === 'get') {
        const params = new window.URLSearchParams(data);
        serverUrl = `${serverUrl}?${params}`;
    }
    const res = await fetch(serverUrl, {
        ...opt,
        method: method,
        headers: {
            ...opt.headers,
            'Content-Type': 'application/json',
            token: `${localStorage.getItem('token')}`,
        },
        body: method !== 'get' ? JSON.stringify(data) : null,
    });
    const resJSON = res.json && (await res.json());
    // if (!res.ok) {
    //     if (res.status === 401 || res.status === 403) {
    //         throw new AuthenticationError('Sesión expirada');
    //     }
    //     console.log(resJSON);
    //     throw new Error('No se pudo procesar la petición.');
    // }
    return resJSON; 
}