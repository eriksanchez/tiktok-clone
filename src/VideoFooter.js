import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from "@material-ui/icons/"

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@eriksanchezflow</h3>
                <p>This is some description</p>
                <div className="videoFooter_icon">
                    <MusicNoteIcon className="videoFooter_icon"/>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter 