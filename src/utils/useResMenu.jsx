import { useState,useEffect } from 'react';
import { MENU_API } from "../utils/constants";

const useResMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }),[];

    const fetchMenu = async () => {
        const data = await fetch(MENU_API
           +resId+"&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useResMenu;