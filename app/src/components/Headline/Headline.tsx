import React, { FunctionComponent } from "react";
import { Description, HeadlineContainer, Title } from "../../page/Home/Home.sc";

const Headline: FunctionComponent = () => {
    return (
        <HeadlineContainer>
            <Title>LEAGUE OF LEGENDS ITEMS</Title>
            <Description>Find information and stats about all the items in League of Legends. Players can discuss items and use them in strategy builds and guides to share ideas and concepts for LOL item builds!</Description>
        </HeadlineContainer>
    );
};

export default Headline;
