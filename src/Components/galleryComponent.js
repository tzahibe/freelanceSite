import React from 'react';

class GalleryComponent extends React.Component {

        render() {
            return (
                <div className="gallery">
                <header className="special">
                  <h2>What's New</h2>
                </header>
                <div className="content">
                  <div className="media">
                    <a href="/images/thumbs/01.jpg"><img src="/images/thumbs/01.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                  <div className="media">
                    <a href="/images/fulls/05.jpg"><img src="/images/thumbs/05.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                  <div className="media">
                    <a href="/images/fulls/09.jpg"><img src="/images/thumbs/09.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                  <div className="media">
                    <a href="/images/fulls/02.jpg"><img src="/images/thumbs/02.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                  <div className="media">
                    <a href="/images/fulls/06.jpg"><img src="/images/thumbs/06.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                  <div className="media">
                    <a href="/images/fulls/10.jpg"><img src="/images/thumbs/10.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                  <div className="media">
                    <a href="/images/fulls/03.jpg"><img src="/images/thumbs/03.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                  <div className="media">
                    <a href="/images/fulls/07.jpg"><img src="/images/thumbs/07.jpg" alt="" title="This right here is a caption." /></a>
                  </div>
                </div>
                <footer>
                  <a href="gallery.html" className="button big">Full Gallery</a>
                </footer>
              </div>
            )
        }   
}


export default GalleryComponent;