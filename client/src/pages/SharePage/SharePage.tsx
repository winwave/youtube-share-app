import { useState } from "react";
import {Layout} from "../../components/Layout/Layout";

export const SharePage = () => {
    const [url, setUrl] = useState("");

    const onUpdateField = e => {
        setUrl(e.target.value);
    };

    return (
        <Layout>
            <div className="form-control">
                <div>Share a youtube movie</div>
                <label>Youtube URL:</label>
                <input
                    type="text"
                    name="url"
                    value={url}
                    onChange={onUpdateField}
                />
            </div>
        </Layout>
    )
}