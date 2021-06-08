import React, { FunctionComponent } from "react";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Filter from "../../components/Filter/Filter";
import Headline from "../../components/Headline/Headline";
import Search from "../../components/Search/Search";

const Home: FunctionComponent = () => {
    return (
        <BasicLayout>
            <Headline />
            <Search />
            <Filter />
        </BasicLayout>
    );
}

export default Home;
