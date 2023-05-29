import { useState } from "react";
import {Layout} from "../../components/Layout/Layout";
import {VideoItem} from "../../components/VideoItem/VideoItem";

export const HomePage = () => {
    const items = [
        {
            videoId: "je3FTTunyp4",
            sharedBy: "Long LE"
        },
        {
            videoId: "je3FTTunyp4",
            sharedBy: "Long LE"
        },
        {
            videoId: "je3FTTunyp4",
            sharedBy: "Long LE"
        },
        {
            videoId: "je3FTTunyp4",
            sharedBy: "Long LE"
        }
    ]
    return (
        <Layout>
            {items.map(item => <VideoItem videoId={item.videoId} sharedBy={item.sharedBy}/>)}
        </Layout>
    )
}