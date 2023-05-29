import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./SharePage.css";

export const SharePage = () => {
    const [url, setUrl] = useState("");

    const onUpdateField = e => {
        setUrl(e.target.value);
    };

    return (
        <Layout>
            <div className="d-flex justify-content-center pt-5">
                <div className="form-control form-content">
                    <h4>Share a youtube movie</h4>
                    <div className="pb-3">
                        <label className="pe-2">Youtube URL:</label>
                        <input
                            type="text"
                            name="url"
                            value={url}
                            onChange={onUpdateField}
                            size={30}
                        />
                    </div>
                    <button className="btn btn-danger px-5">Share</button>
                </div>
            </div>
        </Layout>
    )
}