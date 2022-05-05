import React from 'react';
import './Widgets.css'

const Widgets = () => {
    return (
        <div className="widgets">

            <iframe 
                title="page"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsekmitl&tabs=timeline&width=340&height=800&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" 
                width="340"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
            
        </div>
    )
}

export default Widgets;
