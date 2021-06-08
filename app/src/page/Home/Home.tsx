import React, { FunctionComponent } from "react";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Headline from "../../components/Headline/Headline";
import Search from "../../components/Search/Search";

const Home: FunctionComponent = () => {
    return (
        <BasicLayout>
            <Headline />
            <Search />
        </BasicLayout>
    );
}

export default Home;
