import { useEffect, useState } from "react";



const useOnlineStatus = () => {
    const [ onlineStatus, setOnlineStatus ] = useState(true);
    // check if online

    useEffect( ()=> {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    }, [/** Empty dependency array to ensure eventListener is added only once i.e. initially*/])

    return onlineStatus; // boolean value
}

export default useOnlineStatus;