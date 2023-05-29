import {useEffect, useState} from "react";
import "./VideoItem.css";
import {FaThumbsUp, FaEye} from "react-icons/fa";

export const VideoItem = ({videoId, sharedBy}) => {
    const API_KEY = "AIzaSyC9E4aBYOkNweCQgAGISBLky6T1oocaImI";
    const [info, setInfo] = useState({
        title: "",
        description: "",
        viewCount: 0,
        likeCount: 0
    });

    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/videos?id=" + videoId + "&key=" + API_KEY + "&fields=items(id,snippet(channelId,title,description),statistics)&part=snippet,statistics")
            .then(r => r.json())
            .then(data => setInfo({
                likeCount: data["items"][0]["statistics"]["likeCount"],
                viewCount: data["items"][0]["statistics"]["viewCount"],
                title: data["items"][0]["snippet"]["title"],
                description: data["items"][0]["snippet"]["description"]
            }))
    }, []);

    return (
        <div className="d-flex justify-content-between p-5">
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ly36kn0ug4k"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>
            <div className="ps-2">
                <div className="title">{info.title}</div>
                <div className="fw-bold pb-1">{sharedBy}</div>
                <div ><span className="pe-4">Like <FaThumbsUp/>: {info.likeCount} </span><span> View <FaEye/>: {info.viewCount}</span></div>
                <div className="pb-1 pt-2 fst-italic">Description:</div>
                <div className="crop-text-3">{info.description}</div>
            </div>
        </div>
    )
}