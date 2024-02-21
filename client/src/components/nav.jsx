import React from 'react'

function Navigationpane() {
  return (
    <div>
        <nav>
            <div className="leftnavside">
                <a href=""><h1>SideNotes</h1></a>
            </div>
            <div className="rightnavside">
                <div className="button"><a href="">My Notes</a></div>
                <div className="button"><a href="">Sort</a></div>
                <div className="button"><a href="">Account</a></div>
            </div>
        </nav>
    </div>
  )
}

export default Navigationpane