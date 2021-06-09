import React, { FunctionComponent, useState } from "react";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Filter from "../../components/Filter/Filter";
import Headline from "../../components/Headline/Headline";
import Output from "../../components/Output/Output";
import Search from "../../components/Search/Search";

const Home: FunctionComponent = () => {
    const [data, setData] = useState();
    console.log(data);

    const handleData = (item: any) => {
        setData(item)
    }

    return (
        <BasicLayout>
            <Headline />
            <Search setData={handleData} />
            <Filter />
            {data && <Output data={data}/>}
        </BasicLayout>
    );
}

export default Home;
