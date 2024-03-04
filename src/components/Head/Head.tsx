import React from "react";
import {Meta, Title} from "react-head";
import {OpenGraph, OpenGraphType, TwitterCardType, TwitterCards} from "./components"
interface HeadProps {
    title: string
    description: string
    openGraph: OpenGraphType
    twitterCards: TwitterCardType
}
export const Head:React.FC<HeadProps> = ({ description, openGraph, twitterCards, title="QR concept"}) => {
    return (
        <React.Fragment>
            <Title>{title}</Title>
            {description ? (<Meta name="description" content={description} />) : null}
            {(openGraph ? <OpenGraph og={openGraph} /> : null)}
            {(twitterCards ? <TwitterCards twitter={twitterCards} /> : null)}
        </React.Fragment>
    );
};
