import Cookies from 'js-cookie';

const SetCookie = (cookiename, usrin) =>{
    Cookies.set(cookiename, usrin, {
        expires:7,
        secure:true,
        sameSite:'Strict',
        path:''
    });
};

export default SetCookie;