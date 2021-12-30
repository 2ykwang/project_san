import React, { createContext } from "react";

// user 정보를 담을 context를 만드는 곳
export const LoginInfoContext = createContext();

const LoginInfoStore = (props) => {
    const users = {
        "id": "elice@test.com",
        "nickname": "엘리스",
        "password": ""
}

    return (<LoginInfoContext.Provider value={users}>{props.children}</LoginInfoContext.Provider>
    );
};

export default LoginInfoStore;